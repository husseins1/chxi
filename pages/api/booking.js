// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { gql, GraphQLClient } from "graphql-request";
const token = process.env.TOKEN;
const endPoint = process.env.GRAPHCMS_END_POINT;
export default async function handler(req, res) {
const graphQLClient = new GraphQLClient(endPoint, {
  headers: {
    authorization: `Bearer ${process.env.TOKEN}`,
  },
});
const body = JSON.parse(req.body);
  const variables = {
    name:body.name,
    email:body.email,
    message:body.message
  }
 
  
  const mutat = gql`
    mutation book($name: String! $email: String! $message: String!) {
      createBooking(
        data: { name:$name email: $email, message: $message }
      ) {
        name
      }
    }
  `;
  try{
    const result = await graphQLClient.request(mutat,variables);
    res.status(200).json({ name: result })
    
  }catch(error){
    console.log(error)
    res.status(400).json({ error })
    return  
  }

}
