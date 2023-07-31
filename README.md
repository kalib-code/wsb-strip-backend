
## API

```bash

curl  -X POST \
  'https://kmdstqyesi.execute-api.us-east-1.amazonaws.com/session' \
  --header 'Accept: */*' \
  --header 'User-Agent: Thunder Client (https://www.thunderclient.com)' \
  --header 'Content-Type: application/json' \
  --data-raw '[
  {
    "price_id": "price_1KBchhEQphZC08dEIIZGOFtt",
    "qty": 1
  }
]'
```
```json
{
   "id":"cs_test_a1pRYRw5WEE1PntTCA6lJrdKd8eLILkH35btTGJRetW44nASQA87UTwjYg",
   "object":"checkout.session",
   "after_expiration":null,
   "allow_promotion_codes":null,
   "amount_subtotal":900,
   "amount_total":900,
   "automatic_tax":{
      "enabled":false,
      "status":null
   },
   "billing_address_collection":null,
   "cancel_url":"https://example.com/cancel",
   "client_reference_id":null,
   "consent":null,
   "consent_collection":null,
   "created":1690771735,
   "currency":"usd",
   "currency_conversion":null,
   "custom_fields":[
      
   ],
   "custom_text":{
      "shipping_address":null,
      "submit":null
   },
   "customer":null,
   "customer_creation":"if_required",
   "customer_details":null,
   "customer_email":null,
   "expires_at":1690858135,
   "invoice":null,
   "invoice_creation":{
      "enabled":false,
      "invoice_data":{
         "account_tax_ids":null,
         "custom_fields":null,
         "description":null,
         "footer":null,
         "metadata":{
            
         },
         "rendering_options":null
      }
   },
   "livemode":false,
   "locale":null,
   "metadata":{
      
   },
   "mode":"payment",
   "payment_intent":null,
   "payment_link":null,
   "payment_method_collection":"always",
   "payment_method_options":{
      
   },
   "payment_method_types":[
      "card"
   ],
   "payment_status":"unpaid",
   "phone_number_collection":{
      "enabled":false
   },
   "recovered_from":null,
   "setup_intent":null,
   "shipping_address_collection":null,
   "shipping_cost":null,
   "shipping_details":null,
   "shipping_options":[
      
   ],
   "status":"open",
   "submit_type":null,
   "subscription":null,
   "success_url":"https://example.com/success",
   "total_details":{
      "amount_discount":0,
      "amount_shipping":0,
      "amount_tax":0
   },
   "url":"https://checkout.stripe.com/c/pay/cs_test_a1pRYRw5WEE1PntTCA6lJrdKd8eLILkH35btTGJRetW44nASQA87UTwjYg#fidkdWxOYHwnPyd1blpxYHZxWm59NENfUkR%2FSW1SaV19Vl89SW5HN39%2FcycpJ2N3amhWYHdzYHcnP3F3cGApJ2lkfGpwcVF8dWAnPyd2bGtiaWBabHFgaCcpJ2BrZGdpYFVpZGZgbWppYWB3dic%2FcXdwYHgl"
}
```

### How to 
- clone this repo and npm install

- run if you want to run on your local machine but you need your AWS config set up


- add you stripe key secret by running this 

```bash
npx sst secrets set STRIPE_KEY sk_secret key
```

- run on local

```bash
npx sst dev
```

- to deploy just run 
```bash
npx sst deploy
```


## to change config 
- go to stacks/ApiStack.ts
- change the URL value if you have your own end point for the success and failed page. 
