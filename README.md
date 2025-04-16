# Echo Lambda Service

This repository contains an AWS Lambda function that echoes back HTTP request details along with the Terraform infrastructure code to deploy it.

## Components

- **Lambda Function**: Node.js function that returns the headers and body of incoming requests
- **API Gateway**: HTTP API Gateway to expose the Lambda function
- **Infrastructure as Code**: Terraform configuration for AWS resources

## Structure

```
.
├── README.md
├── src/
│   └── index.js        # Lambda function code
└── terraform/
    ├── main.tf         # Main Terraform configuration
    ├── variables.tf    # Variable definitions
    └── providers.tf    # Provider configuration
```

## Deployment

1. Configure AWS credentials in your environment
2. Initialize Terraform:
   ```bash
   cd terraform
   terraform init
   ```
3. Deploy the infrastructure:
   ```bash
   terraform apply
   ```

## Testing

Once deployed, you can test the endpoint using curl:

```bash
curl -X POST https://<api-id>.execute-api.<region>.amazonaws.com/ \
  -H "Content-Type: application/json" \
  -d '{"test": "data"}'
```

## Response Format

The service will respond with a JSON object containing:
- The headers received in the request
- The body received in the request

Example response:
```json
{
  "received_headers": {
    "Content-Type": "application/json"
  },
  "received_body": "{\"test\": \"data\"}"
}
```