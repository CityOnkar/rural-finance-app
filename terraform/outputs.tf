output "api_url" {
  value = aws_apigatewayv2_api.api.api_endpoint
}

output "cloudfront_url" {
  value = aws_cloudfront_distribution.cdn.domain_name
}
