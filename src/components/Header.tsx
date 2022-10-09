import React from 'react'
import { BsSearch, BsBell } from "react-icons/bs";
import "./styles/Header.scss"

const Header = () => {
  return (
     <div className="head">
        {/* -------icon */}

        <div>
           <img className="iconimg" src="/assets/images/icon.png" alt="" />
        </div>

        {/* ---------search div           */}
        <div className="search">
              <input type="search" className='inputSea' />
              <div className='searchIcon'> <BsSearch className='icon-se' /> </div>
        </div>

        {/* -------------user logo */}

          <div className="userlogo">
              <p>Doc</p>
              <div> <BsBell /> </div>
              <div className='userimg'>
                  <img src="/assets/images/user.png" alt="userimage" className='imguser' />
                  <p>Adedeji</p>
              </div>
              
        </div>

        {/* ---------end           */}
     </div>
  );
}

export default Header