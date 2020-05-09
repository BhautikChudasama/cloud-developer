export const config = {
  "dev": {
    "username": "myadmin",
    "password": "myadmin123",
    "database": "udagram-dev",
    "host": "database-1.cstewxadxfak.us-east-1.rds.amazonaws.com",
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": "udagram-bhautik-prod"
  },
  "prod": {
    "username": "myadmin",
    "password": "myadmin123",
    "database": "",
    "host": "database-1.cstewxadxfak.us-east-1.rds.amazonaws.com",
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "nlacbavbnjknauihASC453ASFNJSAb"
  }
}
