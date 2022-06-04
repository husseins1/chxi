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
            { title: "Chicken" }
            { title: "Beef" }
            { title: "اطباق اللحم" }
            { title: "اطباق الدجاج" }
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
export const getMenu = async (lang) => {
  const variables ={
    lang
  }
  const query = gql`
    query Categories($lang: Locale!) {
      categories(locales: [$lang]) {
        title
        img {
          url
        }
      }
    }
  `;
  const result = await request(graphApiEndPoint, query, variables);
    
  return result;
};
export const getItems = async (lang,title) => {
  const variables ={
    lang,
    title
  }
  
  const query = gql`
    query Categories($lang: Locale!, $title: String!) {
      categories(locales: [$lang], where: { title: $title }) {
        items {
          img {
            url
          }
          title
          price
          description
          types
        }
      }
    }
  `;
  const result = await request(graphApiEndPoint, query, variables);
    
  return result;
};