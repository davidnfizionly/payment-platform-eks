#!/usr/bin/env python3
"""
Simulateur de trafic pour la plateforme de paiement.

Usage:
    python simulate.py setup                 # crée les wallets de départ
    python simulate.py background            # trafic continu Alice<->Bob (Ctrl+C pour arrêter)
    python simulate.py scenario velocity      # déclenche l'abus de vélocité
    python simulate.py scenario spike         # déclenche un pic de montant
    python simulate.py scenario travel        # déclenche un voyage impossible
    python simulate.py scenario all           # déclenche les 3 scénarios à la suite
"""

import argparse
import random
import sys
import time
import uuid

import requests

API_BASE_URL = "http://a847c68f0877c47dba4b3b66207271df-1293015207.us-east-1.elb.amazonaws.com/api"

WALLETS = [
    {"wallet_id": "alice", "owner_name": "Alice", "initial_balance": 5000},
    {"wallet_id": "bob", "owner_name": "Bob", "initial_balance": 5000},
    {"wallet_id": "charlie", "owner_name": "Charlie", "initial_balance": 3000},
]

LOCATIONS = ["Nairobi", "Kinshasa", "Kampala", "Lagos", "Dar es Salaam"]


def create_wallet(wallet_id: str, owner_name: str, initial_balance: float):
    resp = requests.post(
        f"{API_BASE_URL}/wallets",
        json={"wallet_id": wallet_id, "owner_name": owner_name, "initial_balance": initial_balance},
    )
    if resp.status_code == 201:
        print(f"✅ Wallet créé : {wallet_id} ({owner_name}, solde initial {initial_balance})")
    elif resp.status_code == 409:
        print(f"ℹ️  Wallet {wallet_id} existe déjà, on continue")
    else:
        print(f"⚠️  Erreur création wallet {wallet_id} : {resp.status_code} {resp.text}")


def setup_wallets():
    print("Création des wallets de départ...")
    for w in WALLETS:
        create_wallet(**w)


def transfer(from_wallet: str, to_wallet: str, amount: float, location: str = "unknown"):
    idempotency_key = str(uuid.uuid4())
    resp = requests.post(
        f"{API_BASE_URL}/transfers",
        json={
            "idempotency_key": idempotency_key,
            "from_wallet": from_wallet,
            "to_wallet": to_wallet,
            "amount": amount,
            "location": location,
        },
        timeout=10,
    )
    status_icon = "✅" if resp.status_code == 200 else "❌"
    print(f"{status_icon} {from_wallet} → {to_wallet} : {amount} [{location}] — HTTP {resp.status_code}")
    return resp


def run_background_traffic():
    print("🔁 Démarrage du trafic continu Alice↔Bob (Ctrl+C pour arrêter)...")
    wallet_ids = [w["wallet_id"] for w in WALLETS]

    try:
        while True:
            from_wallet, to_wallet = random.sample(wallet_ids, 2)
            amount = round(random.uniform(5, 50), 2)
            location = random.choice(LOCATIONS)
            transfer(from_wallet, to_wallet, amount, location)
            time.sleep(random.uniform(1.5, 4))
    except KeyboardInterrupt:
        print("\n⏹️  Trafic arrêté.")


def scenario_velocity_abuse(wallet_id: str = "alice", target: str = "bob"):
    print(f"\n🚨 SCÉNARIO : Abus de vélocité sur {wallet_id}")
    count = 18
    for i in range(count):
        transfer(wallet_id, target, round(random.uniform(5, 15), 2), "Nairobi")
        time.sleep(0.5)
    print(f"✅ {count} transactions envoyées en rafale — surveille le dashboard pour l'alerte")


def scenario_amount_spike(wallet_id: str = "alice", target: str = "bob"):
    print(f"\n🚨 SCÉNARIO : Pic de montant sur {wallet_id}")
    print("Établissement de l'historique (petits montants)...")
    for i in range(5):
        transfer(wallet_id, target, round(random.uniform(10, 30), 2), "Nairobi")
        time.sleep(1)

    print("Envoi du montant anormalement élevé...")
    transfer(wallet_id, target, 3000, "Nairobi")
    print("✅ Pic de montant envoyé — surveille le dashboard pour l'alerte")


def scenario_impossible_travel(wallet_id: str = "alice", target: str = "bob"):
    print(f"\n🚨 SCÉNARIO : Voyage impossible sur {wallet_id}")
    transfer(wallet_id, target, 20, "Nairobi")
    print("Transaction depuis Nairobi envoyée. Attente de 5s (bien en dessous de la fenêtre de 90s)...")
    time.sleep(5)
    transfer(wallet_id, target, 20, "Lagos")
    print("✅ Transaction depuis Lagos envoyée — surveille le dashboard pour l'alerte 'voyage impossible'")


def main():
    parser = argparse.ArgumentParser(description="Simulateur de trafic — Payment Platform")
    subparsers = parser.add_subparsers(dest="command", required=True)

    subparsers.add_parser("setup", help="Crée les wallets de départ")
    subparsers.add_parser("background", help="Lance le trafic continu Alice<->Bob")

    scenario_parser = subparsers.add_parser("scenario", help="Déclenche un scénario de fraude")
    scenario_parser.add_argument(
        "name", choices=["velocity", "spike", "travel", "all"], help="Scénario à déclencher"
    )

    args = parser.parse_args()

    if args.command == "setup":
        setup_wallets()
    elif args.command == "background":
        run_background_traffic()
    elif args.command == "scenario":
        if args.name == "velocity":
            scenario_velocity_abuse()
        elif args.name == "spike":
            scenario_amount_spike()
        elif args.name == "travel":
            scenario_impossible_travel()
        elif args.name == "all":
            scenario_velocity_abuse()
            time.sleep(3)
            scenario_amount_spike()
            time.sleep(3)
            scenario_impossible_travel()


if __name__ == "__main__":
    main()
