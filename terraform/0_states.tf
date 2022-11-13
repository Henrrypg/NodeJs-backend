terraform{
    backend "s3" {
        bucket = "awscodepipelinehenrry"
        encrypt = true
        key = "terraform2.tfstate"
        region = "us-east-1"
    }
}

provider "aws" {
    region = "us-east-1"
}
