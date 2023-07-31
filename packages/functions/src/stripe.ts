
import { ApiHandler  } from "sst/node/api";
import { create} from "@wsb-stripe/core/src/stripe"


export const session  = ApiHandler( async (event) => {
   const data =  JSON.parse(event.body as string) 
    const session =  await create(data)
 
  return {
    statusCode: 200,
    body: JSON.stringify(session)
  }
});


export const list = ApiHandler(async (_evt) => {

    return {
      statusCode: 200,
      body: "List Stripe",
    };
  });
