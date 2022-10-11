import React from 'react'

const OrganModal = () => {
  return (
     <div className="workin">
        <div>
           <label htmlFor="">Organization</label>
           <input type="text" placeholder="Select" />
        </div>
        <div>
           <label htmlFor="">Username</label>
           <input type="text" placeholder="Select" />
        </div>
        <div className="btn">
           <button className="bt"> Reset</button>
           <button className="bn">Filter</button>
        </div>
     </div>
  );
}

export default OrganModal