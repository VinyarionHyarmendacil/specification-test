# getTokenBundles

## Request
`GET https://api.vrchat.cloud/api/1/tokenBundles`

| Header | Value |
| ------ | ----- |
| user-agent | `specification-test/@<unstable> https://github.com/vrchatapi/specification-test/issues/new` |
| cookie | `auth=<redacted>; twoFactorAuth=<redacted>` |


## Response
`200 OK`

| Header | Value |
| ------ | ----- |
| access-control-allow-credentials | `true` |
| cache-control | `private, no-cache` |
| connection | `keep-alive` |
| content-type | `application/json; charset=utf-8` |
| etag | `<redacted>` |
| pragma | `no-cache` |
| server | `cloudflare` |
| transfer-encoding | `chunked` |
| vary | `Authorization, Accept-Encoding` |
| x-frame-options | `deny` |

```jsonc
[
  {
    "id": "vrchat-credit-bundle-600",
    "steamItemId": "6001",
    "oculusSku": "vrchat-credits-600",
    "amount": 499,
    "description": "600 VRChat Credits",
    "tokens": 600,
    "imageUrl": "https://assets.vrchat.com/www/images/credits/CreditBundle_600.png"
  },
  {
    "id": "vrchat-credit-bundle-1200",
    "steamItemId": "6002",
    "oculusSku": "vrchat-credits-1200",
    "amount": 999,
    "description": "1200 VRChat Credits",
    "tokens": 1200,
    "imageUrl": "https://assets.vrchat.com/www/images/credits/CreditBundle_1200.png"
  },
  {
    "id": "vrchat-credit-bundle-2400",
    "steamItemId": "6003",
    "oculusSku": "vrchat-credits-2400",
    "amount": 1999,
    "description": "2400 VRChat Credits",
    "tokens": 2400,
    "imageUrl": "https://assets.vrchat.com/www/images/credits/CreditBundle_2400.png"
  },
  {
    "id": "vrchat-credit-bundle-6000",
    "steamItemId": "6004",
    "oculusSku": "vrchat-credits-6000",
    "amount": 4999,
    "description": "6000 VRChat Credits",
    "tokens": 6000,
    "imageUrl": "https://assets.vrchat.com/www/images/credits/CreditBundle_6000.png"
  },
  {
    "id": "vrchat-credit-bundle-12000",
    "steamItemId": "6005",
    "oculusSku": "vrchat-credits-12000",
    "amount": 9999,
    "description": "12000 VRChat Credits",
    "tokens": 12000,
    "imageUrl": "https://assets.vrchat.com/www/images/credits/CreditBundle_12000.png"
  }
]
```