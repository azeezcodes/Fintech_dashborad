import React from 'react'

const PersonalDetail = () => {
  return (
     <div>
        <div className="alldetail">
           <div className="eachdet">
              <p className="aa">FULL NAME</p>
              <p>Grace Effiom</p>
           </div>
           <div className="eachdet">
              <p className="aa">PHONE NUMBER</p>
              <p>07060780922</p>
           </div>
           <div className="eachdet">
              <p className="aa">EMAIL ADDRESS</p>
              <p>grace@gmail.com</p>
           </div>
           <div className="eachdet">
              <p className="aa">BVN</p>
              <p>00343224522</p>
           </div>
           <div className="eachdet">
              <p className="aa">GENDER</p>
              <p>Female</p>
           </div>
           <div className="eachdet">
              <p className="aa">Marital status</p>
              <p>SINGLE</p>
           </div>
           <div className="eachdet">
              <p className="aa">CHILDREN</p>
              <p>NONE</p>
           </div>
           <div className="eachdet">
              <p className="aa">TYPE OF RESIDENCE</p>
              <p>Parent’s Apartment</p>
           </div>
        </div>

        {/* ----------------- */}

        <p>Education and Employment</p>

        <div className="alldetail">
           <div className="eachdet">
              <p className="aa">LEVEL OF EDUCATION</p>
              <p>B.Sc</p>
           </div>
           <div className="eachdet">
              <p className="aa">EMPLOYMENT STATUS</p>
              <p>Employed</p>
           </div>
           <div className="eachdet">
              <p className="aa">SECTOR</p>
              <p>FinTech</p>
           </div>
           <div className="eachdet">
              <p className="aa">DURATION OF EMPLOYMENT</p>
              <p>2 years</p>
           </div>
           <div className="eachdet">
              <p className="aa">OFFICE EMAIL</p>
              <p>grace@lendsqr.com</p>
           </div>
           <div className="eachdet">
              <p className="aa">MONTHLY INCOME</p>
              <p>₦200,000.00- ₦400,000.00</p>
           </div>
          
        </div>
     </div>
  );
}

export default PersonalDetail