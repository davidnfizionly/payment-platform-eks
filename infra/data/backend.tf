terraform {
  backend "s3" {
    bucket         = "payment-platform-tfstate-116143764563"
    key            = "data/terraform.tfstate"
    region         = "us-east-1"
    dynamodb_table = "payment-platform-tfstate-lock"
    encrypt        = true
  }
}
