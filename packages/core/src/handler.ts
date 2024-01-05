import { Context, ApiGatewayProxyEvent } from "aws-lambda";

export default function handler(
  lambda: (evt: ApiGatewayProxyEvent, context: Context) => Promise<string>
) {
  return async function(event: ApiGatewayProxyEvent, context: Context) {
    let body, statusCode;

    try {
      body = await lambda(event, context);
      statusCode = 200;
    } catch (error) {
      statusCode = 500;
      body = JSON.stringify({
        error: error instanceof Error ? error.message : String(error),
      });
    }

    return {
      statusCode,
      headers: { "content-type": "application/json" },
      body,
    };
  };
}
