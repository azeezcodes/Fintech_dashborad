import React from 'react';
import "./styles/Sidebar.scss";


type Icon = {
   icon: JSX.Element;
   name: string;
};

const Icon = (props: Icon) => {
  return (
     <div className='iconed'>
        {props.icon}
        <p>{props.name}</p>
     </div>
  );
}

export default Icon