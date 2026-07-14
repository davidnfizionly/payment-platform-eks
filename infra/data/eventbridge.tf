resource "aws_cloudwatch_event_bus" "payment_events" {
  name = "${var.project_name}-events"

  tags = {
    Project = var.project_name
  }
}

resource "aws_cloudwatch_event_rule" "transaction_confirmed" {
  name           = "${var.project_name}-transaction-confirmed"
  description    = "Capture les événements de transaction confirmée pour notifier l'utilisateur"
  event_bus_name = aws_cloudwatch_event_bus.payment_events.name

  event_pattern = jsonencode({
    source      = ["payment.transaction"]
    detail-type = ["TransactionConfirmed"]
  })
}

resource "aws_cloudwatch_event_rule" "fraud_detected" {
  name           = "${var.project_name}-fraud-detected"
  description    = "Capture les événements de fraude détectée pour alerter en temps réel"
  event_bus_name = aws_cloudwatch_event_bus.payment_events.name

  event_pattern = jsonencode({
    source      = ["payment.fraud"]
    detail-type = ["FraudAlertRaised"]
  })
}

resource "aws_cloudwatch_event_rule" "transaction_lifecycle" {
  name           = "${var.project_name}-transaction-lifecycle"
  description    = "Capture tous les événements de cycle de vie d'une transaction pour la réconciliation"
  event_bus_name = aws_cloudwatch_event_bus.payment_events.name

  event_pattern = jsonencode({
    source = ["payment.transaction"]
  })
}

output "event_bus_name" {
  value = aws_cloudwatch_event_bus.payment_events.name
}

output "event_bus_arn" {
  value = aws_cloudwatch_event_bus.payment_events.arn
}
