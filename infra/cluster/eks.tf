module "eks" {
  source  = "terraform-aws-modules/eks/aws"
  version = "~> 20.31"

  cluster_name    = "${var.project_name}-eks"
  cluster_version = var.cluster_version

  vpc_id     = module.vpc.vpc_id
  subnet_ids = module.vpc.private_subnets

  cluster_endpoint_public_access  = true
  cluster_endpoint_private_access = true

  enable_irsa = true

  eks_managed_node_groups = {
    default = {
      min_size     = 2
      max_size     = 3
      desired_size = var.node_desired_size

      instance_types = var.node_instance_types
      capacity_type  = "ON_DEMAND"

      labels = {
        role = "general"
      }

      tags = {
        Project = var.project_name
      }
    }
  }

  enable_cluster_creator_admin_permissions = true

  tags = {
    Project   = var.project_name
    ManagedBy = "terraform"
  }
}
