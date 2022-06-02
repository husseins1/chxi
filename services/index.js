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
      categories(
        where: {
          OR: [
            { title: "Wine & Beer" }
            { title: "Cocktails" }
            { title: "كوكتيل" }
            { title: "عصائر والشرابت" }
          ]
        }
        locales: [$lang]
      ) {
        id
        title
        items {
          title
          price
          types
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