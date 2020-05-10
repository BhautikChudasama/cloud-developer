export const config = {
  "dev": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "postgres",
    "aws_region": "us-east-1",
    "aws_profile": "default",
    "aws_media_bucket": process.env.BUCKET
  },
  "prod": {
    "username": process.env.USERNAME,
    "password": process.env.PASSWORD,
    "database": process.env.DB,
    "host": process.env.HOST,
    "dialect": "postgres"
  },
  "jwt": {
    "secret": "nlacbavbnjknauihASC453ASFNJSAb"
  }
}
