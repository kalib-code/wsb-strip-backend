
import Stripe from "stripe"
import { Config } from "sst/node/config";

export interface IData {
    price_id?: string,
    qty?: number
}

export async function create(data:IData[]) {

const YOUR_DOMAIN = Config.URL;

  const stripe = new Stripe(Config.STRIPE_KEY,{
    apiVersion:'2022-11-15'
  })

  const dataMap = data.map((item)=>{
    return {
        price: item.price_id,
        quantity: item.qty
    }
  })

  try {
    const session = await  stripe.checkout.sessions.create({
        line_items: dataMap,
        mode: 'payment',
        success_url: `${YOUR_DOMAIN}/success`,
        cancel_url: `${YOUR_DOMAIN}/cancel`,
      })

      return session

  } catch(e){

    console.log(e)
    return e
  }


}
