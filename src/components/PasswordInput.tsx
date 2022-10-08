import { useState } from "react";
import "./styles/Password.scss";


type Button = {
   placeholder: string;
   name: string; 
};

export const PasswordInput = (props: Button) => {
   const [reveal, setReveal] = useState(false);

   const first = (e: any) => {
      e.preventDefault();

      if (reveal) {
         setReveal(false);
      } else {
         setReveal(true);
      }
   };

   return (
      <div>
    

         <div className="visible">
            <input
               type={reveal ? "text" : "password"}
               placeholder= {props.placeholder}
               className="input-text"
               name={props.name}
               
            />
            <button className="bg" onClick={first}>
               {reveal ? "Hide" : "Show"}
            </button>
         </div>
      </div>
   );
};
