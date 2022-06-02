
import moment from "moment";
import {useState,useRef} from "react";
import SubHeading from '../SubHeading/SubHeading';

let timer;
const Newsletter = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [date , setDate] = useState('');
  const [success,setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    phone: '',
    date: ''
  });
  const ref = useRef(null);
  
  const submitHandler =async (e)=>{
    
    
    e.preventDefault();
    clearTimeout(timer);
    if(name.length < 3){
      setErrors(errors=>({...errors,name:'Name must be at least 3 characters long'}));
    }else{
      setErrors(errors=>({...errors,name:''}));
    }
    
    if(!(/^\d+$/.test(phone)) || phone.length < 10 || phone.length > 11){
      setErrors(errors=>({...errors, phone: 'Phone is not valid'}));
   
    }else{
      setErrors(errors=>({...errors, phone: ''}));
     
    }
    if(moment(date).isBefore(moment())){
      setErrors(errors=>({...errors, date: 'Date is not valid'}));
    
      
    }else{
      setErrors(errors=>({...errors, date: ''}));
      
    }
    if (
      name.length < 3 ||
      !/^\d+$/.test(phone) ||
      phone.length < 10 ||
      phone.length > 11 ||
      moment(date).isBefore(moment())
    ) {
      

      ref.current.classList.remove("remove");
      timer = setTimeout(() => ref.current.classList.add("remove"), 5000);
    } else {
      console.log("sdkj");
      const result = await fetch("/api/booking", {
        method: "POST",
        body: JSON.stringify({ name, phone, date }),
      });
      if (!result.ok) {
        setErrors((errors) => ({ ...errors, server: "Something went wrong" }));
        ref.current.classList.remove("remove");
        timer = setTimeout(() => {
          ref.current.classList.add("remove");
          const newErrors = { ...errors };
          delete newErrors.server;
          setErrors(newErrors);
        }, 5000);
      } else {
        setSuccess(true);
      }
    }
      
    
   
  }
  return (
    <>
      <style jsx>
        {`
          .app__newsletter {
            padding: 2rem 4rem;
            border: 1px solid var(--color-golden);
            background: var(--color-black);
          }

          .app__newsletter-heading {
            text-align: center;
          }

          .app__newsletter-input {
            flex-direction: column;
            margin-top: 3rem;
          }
          .app__newsletter-input > * {
            margin-bottom: 1rem;
          }

          .app__newsletter-input input {
            width: 620px;
            border: 1px solid var(--color-golden);
            border-radius: 5px;
            font-size: 1rem;
            font-family: var(--font-base);
            color: var(--color-white);

            margin-right: 2rem;
            padding: 0.75rem 1rem;
            background: var(--color-black);
          }

          .app__newsletter-input button {
            width: max-content;
          }
          .error-panel {
            color: white;
            align-self: stretch;
            text-align: center;
            font-size: 1.2rem;
            font-family: var(--font-base);
          }

          .error {
            padding: 0.5rem;
            margin-bottom: 0.5rem;
            background: #a20000;
            border-radius: 5px;
          }
          .remove {
            animation: remove 0.5s ease-in-out;
            display: none;
          }

          @media screen and (min-width: 2000px) {
            .app__newsletter-input input {
              font-size: 2rem;
            }
          }

          @media screen and (max-width: 990px) {
            .app__newsletter-input {
              flex-direction: column;
              width: 100%;
            }

            .app__newsletter-input input {
              margin: 0 0 2rem 0;
              width: 100%;
            }
          }

          @media screen and (max-width: 650px) {
            .app__newsletter {
              padding: 2rem 0;
              border: none;
            }
          }

          @media screen and (max-width: 300px) {
            .app__newsletter-heading h1 {
              font-size: 32px;
              line-height: 50px;
            }
          }
        `}
      </style>
      <div className="app__newsletter">
        <div className="app__newsletter-heading">
          <SubHeading title="Newsletter" />
          <h1 className="headtext__cormorant">Subscribe To Our Newsletter</h1>
          <p className="p__opensans">And never miss latest Updates!</p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="app__newsletter-input flex__center">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="Name"
              placeholder="Enter your Name"
            />
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              required
              type="tel"
              placeholder="Enter your Phone Number"
            />
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              required
              style={{
                background: "var(--color-golden)",
              }}
              type="datetime-local"
              placeholder="Enter your Date"
            />
            <div ref={ref} className="error-panel">
              {Object.keys(errors).map(
                (key) =>
                  errors[key] && (
                    <p className="error" key={key}>
                      {errors[key]}
                    </p>
                  )
              )}
              {success && <p className="success">Sent Successfully</p>}
            </div>
            {success || (
              <button type="submit" className="custom__button">
                Book
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );

}

export default Newsletter;
