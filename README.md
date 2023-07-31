
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
