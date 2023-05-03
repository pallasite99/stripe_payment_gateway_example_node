### Stripe Payment Gateway example using NodeJS

- Base stripe integration using NodeJS
- implemented by referring to this article and understanding basic flow:

https://www.geeksforgeeks.org/how-to-integrate-stripe-payment-gateway-in-node-js/

<img width="952" alt="image" src="https://user-images.githubusercontent.com/26508636/235915586-5b23aa7d-ca9b-4264-8939-abab99f71277.png">

- This is the expected response. Your request will be submitted successfully but will not complete.

```json
{
  "type": "StripeInvalidRequestError",
  "raw": {
    "message": "PaymentMethods of type card cannot be attached to Customers directly without 3DS due to Indian payment regulations. Please instead provide the PaymentMethod and Customer alongside a SetupIntent or PaymentIntent with the `setup_future_usage` parameter. See https://support.stripe.com/questions/guide-for-saving-cards-in-india for more details.",
    "request_log_url": "https://dashboard.stripe.com/test/logs/req_RYQHEuGiWk6fIa?t=1683116707",
    "type": "invalid_request_error",
    "headers": {
      "server": "nginx",
      "date": "Wed, 03 May 2023 12:25:07 GMT",
      "content-type": "application/json",
      "content-length": "515",
      "connection": "keep-alive",
      "access-control-allow-credentials": "true",
      "access-control-allow-methods": "GET, POST, HEAD, OPTIONS, DELETE",
      "access-control-allow-origin": "*",
      "access-control-expose-headers": "Request-Id, Stripe-Manage-Version, X-Stripe-External-Auth-Required, X-Stripe-Privileged-Session-Required",
      "access-control-max-age": "300",
      "cache-control": "no-cache, no-store",
      "idempotency-key": "5585b501-2f9a-4845-8841-091984a324e8",
      "original-request": "req_RYQHEuGiWk6fIa",
      "request-id": "req_RYQHEuGiWk6fIa",
      "stripe-should-retry": "false",
      "stripe-version": "2022-11-15",
      "strict-transport-security": "max-age=63072000; includeSubDomains; preload"
    },
    "statusCode": 400,
    "requestId": "req_RYQHEuGiWk6fIa"
  },
  "rawType": "invalid_request_error",
  "headers": {
    "server": "nginx",
    "date": "Wed, 03 May 2023 12:25:07 GMT",
    "content-type": "application/json",
    "content-length": "515",
    "connection": "keep-alive",
    "access-control-allow-credentials": "true",
    "access-control-allow-methods": "GET, POST, HEAD, OPTIONS, DELETE",
    "access-control-allow-origin": "*",
    "access-control-expose-headers": "Request-Id, Stripe-Manage-Version, X-Stripe-External-Auth-Required, X-Stripe-Privileged-Session-Required",
    "access-control-max-age": "300",
    "cache-control": "no-cache, no-store",
    "idempotency-key": "5585b501-2f9a-4845-8841-091984a324e8",
    "original-request": "req_RYQHEuGiWk6fIa",
    "request-id": "req_RYQHEuGiWk6fIa",
    "stripe-should-retry": "false",
    "stripe-version": "2022-11-15",
    "strict-transport-security": "max-age=63072000; includeSubDomains; preload"
  },
  "requestId": "req_RYQHEuGiWk6fIa",
  "statusCode": 400
}
```
