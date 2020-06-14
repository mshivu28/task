provider "aws" {
  region="ap-south-1"
  access_key = "AKIAJ2JMBPWVXFLRDQQQ"
  secret_key = "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"
   profile="sim"
}
//create EBS 
resource "aws_ebs_volume" "myvol" {
  availability_zone = "ap-south-1b"
  size              =  1
  tags = {
    Name = "myvol"
  }
}
 //creating instance
resource "aws_instance" "task1" {
  ami           =  "ami-052c08d70def0ac62" 
  instance_type = "t2.micro"
  count=1
  security_groups=["launch-wizard-2"] 
  key_name = "Mykey"
 availability_zone="ap-south-1b"
  
tags = {
    Name = "task1"
  }
}
// attaching volume
resource "aws_volume_attachment" "vattch" {
  device_name = "/dev/sdh"
  volume_id   = "vol-03717156b33967a5e"
  instance_id = "i-027b3cf681016eaff"
}
//create bucket
 resource "aws_s3_bucket" "shiv160" {
  bucket = "my-tf-test-bucket"
  acl    = "private"

  tags = {
    Name        = "shiv160"
    Environment = "Dev"
  }
}
