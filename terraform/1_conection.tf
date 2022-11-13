resource "aws_codestarconnections_connection" "github_conection" {
  name          = "connection"
  provider_type = "GitHub"
}
