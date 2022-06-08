

import {useState,useRef} from "react";
import SubHeading from '../SubHeading/SubHeading';

let timer;
const Newsletter = ({ar}) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message , setMessage] = useState('');
  const [success,setSuccess] = useState(false);
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });
  const ref = useRef(null);
  
  const submitHandler =async (e)=>{
    
    
    e.preventDefault();
    clearTimeout(timer);
    if(name.length < 3){
      setErrors(errors=>({...errors,name:ar?"الاسم قصير":'Name must be at least 3 characters long'}));
    }else{
      setErrors(errors=>({...errors,name:''}));
    }
    
    if(!(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))){
      setErrors((errors) => ({
        ...errors,
        email: ar ? "البريد غير صالح" : "Email is not valid",
      }));
   
    }else{
      setErrors(errors=>({...errors, email: ''}));
     
    }
    if(message.length < 1){
      setErrors(errors=>({...errors,message:ar?"الرسالة قصيرة":'Message must be at least 1 characters long'}));
    }else{
      setErrors(errors=>({...errors,message:''}));
    }
    
    if (
      name.length < 3 ||
      !(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)) ||
      message.length < 1
    ) {
      

      ref.current.classList.remove("remove");
      timer = setTimeout(() => ref.current.classList.add("remove"), 5000);
    } else {
      
      const result = await fetch("/api/booking", {
        method: "POST",
        body: JSON.stringify({ name, email, message }),
      });
      if (!result.ok) {
        setErrors((errors) => ({
          ...errors,
          server: ar ? "خطا في الخادم" : "Something went wrong",
        }));
        ref.current.classList.remove("remove");
        timer = setTimeout(() => {
          ref.current.classList.add("remove");
          const newErrors = { ...errors };
          delete newErrors.server;
          setErrors(newErrors);
        }, 5000);
      } else {
        console.log("jkf")
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

          .app__newsletter-input input,
          .app__newsletter-input textarea {
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
            .app__newsletter-input input,
            .app__newsletter-input textarea {
              font-size: 2rem;
            }
          }

          @media screen and (max-width: 990px) {
            .app__newsletter-input,
            .app__newsletter-input textarea {
              flex-direction: column;
              width: 100%;
            }

            .app__newsletter-input input,
            .app__newsletter-input textarea {
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
          <SubHeading title={ar ? "استفسار" : "Tell us"} />
          <h1 className="headtext__cormorant">
            {ar ? "اخبرنا" : "Send us a message"}
          </h1>
          <p className="p__opensans">
            {ar ? "في حال وجود استفسار او ملاحظة" : "Tell us what you think"}
          </p>
        </div>
        <form onSubmit={submitHandler}>
          <div className="app__newsletter-input flex__center">
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              type="Name"
              placeholder={ar ? "اسمك" : "Enter your Name"}
            />
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              type="text"
              placeholder={ar ? "البريد الالكتروني" : "Enter your Email"}
            />
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
              type="text"
              placeholder={ar ? "اكتب رسالتك" : "Enter your Message"}
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
              {success && (
                <p className="success">
                  {ar ? "تم ارسال بنجاح" : "Sent Successfully"}
                </p>
              )}
            </div>
            {success || (
              <button type="submit" className="custom__button">
                {ar ? "ارسل" : "Send"}
              </button>
            )}
          </div>
        </form>
      </div>
    </>
  );

}

export default Newsletter;
