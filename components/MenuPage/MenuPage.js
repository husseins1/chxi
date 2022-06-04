import Item from "../Item/Item";


export default function MenuPage({showModel,content,title}) {
  return (
    <>
      <style jsx>
        {`
          .app__specialMenu-menu_heading {
            font-family: var(--font-base);
            font-weight: 600;
            font-size: 45px;
            line-height: 58.5px;
            letter-spacing: 0.04em;
            color: var(--color-white);
          }

          .app__specialMenu-menu_wine,
          .app__specialMenu-menu_cocktails {
            flex: 1;
            width: 100%;
            flex-direction: column;
          }
          .app__specialMenu_menu_items {
            // display: flex;
            // flex-direction: column;
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            column-gap: 1rem;

            margin: 2rem 0;
            width: 100%;
          }
          @media screen and (max-width: 650px) {
            .app__specialMenu-menu_heading {
              font-size: 35px;
              line-height: 48.5px;
            }
          }
          @media screen and (max-width: 350px) {
            .app__specialMenu_menu_items {
              
              grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
              
            }
          }
        `}
      </style>
      <div className="app__specialMenu-menu_wine  flex__center">
        <p className="app__specialMenu-menu_heading">{title}</p>
        <div className="app__specialMenu_menu_items">
          {content.map((item, index) => (
            <Item 

            showModel={showModel.bind(null, item)}
              key={item.title + index}
              title={item.title}
              price={item.price}
              tags={item.types}
            />
          ))}
        </div>
      </div>
    </>
  );
}
