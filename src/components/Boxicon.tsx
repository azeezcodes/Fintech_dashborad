import React from 'react';


type Box = {
    icon: JSX.Element;
    title: string;
    count: number;
    styles: string;
}


const Boxicon = (props: Box) => {
  return (
      <div className='boxwithicon'>
          <div className={props.styles}>{props.icon}</div>
          <div className='titleBox'>{ props.title}</div>
          <div className='titlecount' >{ props.count}</div>
       </div>
  )
}

export default Boxicon