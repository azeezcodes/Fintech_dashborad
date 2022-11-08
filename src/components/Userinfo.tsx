import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./styles/Login.scss";
import PersonalDetail from "./PersonalDetail";



type datatype = {
   email?: string;
   id?: number;
   image?: string;
   accountBalance?: string;
   placeName?: string;
   accountNumber?: string;
   userName?: string;
   phoneNumber?: string;
};

const Userinfo = () => {
   const [Data, setData] = useState<datatype>({});
   const params = useParams();

   useEffect(() => {
      fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users/${params.id}`)
         .then((response) => {
            if (!response.ok) {
               throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
               );
            }
            return response.json();
         })
         .then((actualData) => {
            setData(actualData);
         })

         .catch((err) => {
            console.log(err.message);
         });
   }, []);

    console.log( Data);

   const navigate = useNavigate();

   return (
      <Layout>
         <div className="userallinfo">
            <div
               className="backto"
               onClick={() => {
                  navigate("/dashboard");
               }}
            >
               <CgArrowLongLeft /> <p>Back to User</p>
            </div>

            <div className="usebtn">
               <p>User Details</p>
               <div>
                  <button className="redbtn">BLACKLIST USER</button>
                  <button className="bluetn">ACTIVATE USER</button>
               </div>
            </div>

            <div className="detailbox">
               {/* ------- whole box */}
               <div className="upperside">
                  <div className="cirlce">
                     <div className="avater"></div>
                     <div className="uname">
                        <p
                           className="ww"
                           style={{ marginRight: "10px", marginLeft: "10px" }}
                        >
                           {Data?.userName}
                        </p>
                        <p className="codeU">{Data?.accountNumber}</p>
                     </div>
                  </div>

                  <div className="star">
                     <p>User's Tier</p>
                     <div>
                        <AiFillStar style={{ color: "#E9B200" }} />
                        <AiOutlineStar style={{ color: "#E9B200" }} />
                        <AiOutlineStar style={{ color: "#E9B200" }} />
                     </div>
                  </div>

                  <div className="worth">
                     <p className="ww">{`₦${Data?.accountBalance}`}</p>
                     <p className="bank">
                        {`${Data?.phoneNumber}/Providus Bank `}
                     </p>
                  </div>
               </div>

               <div className="lowerside">
                  <div className="down">
                     <p>General Details</p>
                  </div>
                  <div className="down">
                     <p>Documents</p>
                  </div>
                  <div className="down">
                     <p>Bank Details</p>
                  </div>
                  <div className="down">
                     <p>Loans</p>
                  </div>
                  <div className="down">
                     <p>Savings</p>
                  </div>
                  <div className="down">
                     <p>App and System</p>
                  </div>
               </div>
               {/* ------- whole box */}
            </div>

            <div className="personaldeta">
               <p>Personal Information</p>

               <PersonalDetail />
            </div>
         </div>
      </Layout>
   );
};

export default Userinfo;
