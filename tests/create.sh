pnpm dlx aws-api-gateway-cli-test \
  --user-pool-id='us-east-1_2CpFnwRlU' \
  --app-client-id='3pg001444dd66aj0oh8fu08pem' \
  --cognito-region='us-east-1' \
  --identity-pool-id='us-east-1:eb035a52-b45b-477e-99a0-3220669156d4' \
  --invoke-url='https://zetq1k6w1j.execute-api.us-east-1.amazonaws.com' \
  --api-gateway-region='us-east-1' \
  --username='chad.pry@gmail.com' \
  --password='SSTdev123!' \
  --path-template='/notes' \
  --method='POST' \
  --body='{"content":"hello world","attachment":"hello.jpg"}'
