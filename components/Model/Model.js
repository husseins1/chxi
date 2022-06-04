

const Model = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";

  return (
      <>
      <style jsx>
        {`
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: rgba(0, 0, 0, 0.6);
            overflow-y:scroll;
          }

          .modal-main {
            // position: fixed;
            position: absolute;
            background: var(--color-black);
            color:white;
            height: auto;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            text-align:center;
          }

          .display-block {
            display: block;
          }

          .display-none {
            display: none;
          }
          .button{
            background: var(--color-golden);
            color: var(--color-white);
            border: none;
            padding: 1rem;
            margin:1rem auto;
           cursor:pointer;
            font-weight:bold;
          }
        `}
      </style>
    <div className={showHideClassName}>
      <section className="modal-main">
        {children}
        <button className="button" type="button" onClick={handleClose}>
          Close
        </button>
      </section>
    </div>
      </>
  );
};

export default Model;
