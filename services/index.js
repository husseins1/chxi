import {gql, request} from 'graphql-request';
const graphApiEndPoint = process.env.GRAPHCMS_END_POINT;

export const getHome = async (lang) => {
  const variables ={
    lang
  }
  const query = gql`
    query MyQuery($lang: Locale!) {
      heroes(locales: [$lang]) {
        bigSlogn
        text
        smallSlogn
      }
      abouts(locales: [$lang]) {
        historyOf
        aboutUs
      }
      categoriesConnection(
        where: { title: "Cocktails", OR: { title: "Cocktails" } }
      ) {
        edges {
          node {
            items(locales: [$lang]) {
              title
              types
              price
            }
          }
        }
      }
      galleries {
        img {
          id
          url(transformation: { document: {} })
        }
      }
      words(locales: [$lang]) {
        name
        who
        quote
        slogan
      }
    }
  `;
  const result = await request(graphApiEndPoint, query, variables);
    
  return result;
};