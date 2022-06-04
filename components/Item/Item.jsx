
const Item = ({ title, price, tags,showModel }) => (
  <>
    <style jsx>
      {`
        .app__menuitem {
          width: 100%;
          margin: 1rem 0;

          display: flex;
          flex-direction: column;
          cursor:pointer;
        }

        .app__menuitem-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .app__menuitem-sub {
          width: 100%;
          margin-top: 0.2rem;
        }

        .app__menuitem-name {
          flex: 1;
        }

        .app__menuitem-dash {
          width: 90px;
          height: 1px;
          background: var(--color-golden);
          margin: 0 1rem;
        }

        .app__menuitem-price {
          display: flex;
          justify-content: flex-end;
          align-items: flex-end;
        }
      `}
    </style>
    <div className="app__menuitem" onClick={showModel}>
      <div className="app__menuitem-head">
        <div className="app__menuitem-name">
          <p className="p__cormorant" style={{ color: "#DCCA87" }}>
            {title}
          </p>
        </div>
        <div className="app__menuitem-dash" />
        <div className="app__menuitem-price">
          <p className="p__cormorant">{price}</p>
        </div>
      </div>

      <div className="app__menuitem-sub">
        <p className="p__opensans" style={{ color: "#AAAAAA" }}>
          {tags}
        </p>
      </div>
    </div>
  </>
);

export default Item;
