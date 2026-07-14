variable "aws_region" {
  description = "Région AWS utilisée pour ce projet"
  type        = string
  default     = "us-east-1"
}

variable "project_name" {
  description = "Nom du projet, utilisé comme préfixe pour les ressources"
  type        = string
  default     = "payment-platform"
}

variable "vpc_cidr" {
  description = "CIDR block du VPC"
  type        = string
  default     = "10.0.0.0/16"
}

variable "cluster_version" {
  description = "Version de Kubernetes pour le cluster EKS"
  type        = string
  default     = "1.30"
}

variable "node_instance_types" {
  description = "Types d'instance EC2 pour le node group managé"
  type        = list(string)
  default     = ["t3.medium"]
}

variable "node_desired_size" {
  description = "Nombre de worker nodes souhaité"
  type        = number
  default     = 2
}
