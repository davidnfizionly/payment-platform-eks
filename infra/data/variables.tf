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
