import React from 'react'
import { AiOutlineEye } from "react-icons/ai";
import { FiUserX, FiUserCheck } from "react-icons/fi";
import { Link, useNavigate } from 'react-router-dom';

const Viewdetail = () => {
    const navigate = useNavigate()
  return (
     <div>
        <div className="viewmodal">
        
              <div className="tt" onClick={() => {
                  navigate('/user')
              }} >
                  
                 <AiOutlineEye /> <p>View Details</p>
              </div>
       

           <div className="tt">
              <FiUserX />
              <p>Blacklist User</p>
           </div>
           <div className="tt">
              <FiUserCheck />
              <p>Activate User</p>
           </div>
        </div>
     </div>
  );
}

export default Viewdetail