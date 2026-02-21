output "api_url" {
  value = aws_apigatewayv2_api.api.api_endpoint
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}

output "frontend_bucket_name" {
  value = aws_s3_bucket.frontend.bucket
}
