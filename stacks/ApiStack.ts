import { Api, Config , StackContext} from "sst/constructs";


export function ApiStack({ stack, app }:StackContext) {

    const STRIPE_KEY = new Config.Secret(stack, "STRIPE_KEY");
    const URL = new Config.Parameter(stack,"URL",{
        value:"https://example.com"
    })

  // Create the API
  const api = new Api(stack, "Api", {
    defaults: {
      function: {
        bind:[STRIPE_KEY,URL]
      },
    },
    routes: {
      "POST /session": "packages/functions/src/stripe.session",
      "GET /list": "packages/functions/src/stripe.list",
    },
  });

  // Show the API endpoint in the output
  stack.addOutputs({
    ApiEndpoint: api.url,
  });

  // Return the API resource
  return {
    api,
  };
}