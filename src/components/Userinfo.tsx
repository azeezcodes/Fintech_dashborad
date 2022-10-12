import React from "react";
import Layout from "../Layout";
import { useNavigate } from "react-router-dom";
import { CgArrowLongLeft } from "react-icons/cg";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import "./styles/Login.scss"
import PersonalDetail from "./PersonalDetail";

const Userinfo = () => {

const navigate = useNavigate()

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
                        <p className="ww">Grace Effiom</p>
                        <p className="codeU">LSQFf587g90</p>
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
                     <p className="ww">₦200,000.00</p>
                     <p className="bank">9912345678/Providus Bank</p>
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
