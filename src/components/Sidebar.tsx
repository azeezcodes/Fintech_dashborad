import React from 'react';
import "./styles/Sidebar.scss";
import {
   FaBriefcase,
   FaUserFriends,
   FaUsers,
   FaRegHandshake,
   FaUserCheck,
   FaUserTimes,
   FaCoins,
   FaUserCog,
   FaScroll,
   FaRegChartBar,
   FaSlidersH,
   FaClipboardList,
   FaHome,
} from "react-icons/fa";
import {
   MdKeyboardArrowDown,
   MdOutlineSavings,
   MdMobileScreenShare,
} from "react-icons/md";
import {
   GiTakeMyMoney,
   GiReceiveMoney,
   GiBank,
   GiGalaxy,
} from "react-icons/gi";

import {
  BiBadgeCheck
} from "react-icons/bi"

import Icon from './IconComponent';



const Sidebar = () => {
  return (
     <div className="mainside">
        {/* -------side-- */}

        <div className="switchname">
           <FaBriefcase />
           <p>Switch Organization</p>
           <div>
              <MdKeyboardArrowDown />
           </div>
        </div>

        {/* ------- */}

        <Icon icon={<FaHome />} name="Dashboard" />

        <div>
           <p className="biHead">CUSTOMERS</p>
           <Icon icon={<FaUserFriends />} name="Users" />
           <Icon icon={<FaUsers />} name="Guarantors" />
           <Icon icon={<GiTakeMyMoney />} name="Loans" />
           <Icon icon={<FaRegHandshake />} name="Decision Models" />
           <Icon icon={<MdOutlineSavings />} name="Savings" />
           <Icon icon={<GiReceiveMoney />} name="Loans Request" />
           <Icon icon={<FaUserCheck />} name="Whitelist" />
           <Icon icon={<FaUserTimes />} name="Karma" />
        </div>

        <div>
           <p className="biHead">BUSINESS</p>
           <Icon icon={<FaBriefcase />} name="Organization" />
           <Icon icon={<GiReceiveMoney />} name="Loan Products" />
           <Icon icon={<GiBank />} name="Savings Products" />
           <Icon icon={<FaCoins />} name="Fees and Charges" />
           <Icon icon={<MdMobileScreenShare />} name="Transactions" />
           <Icon icon={<GiGalaxy />} name="Service" />
           <Icon icon={<FaUserCog />} name="Service Account" />
           <Icon icon={<FaScroll />} name="Settlements" />
           <Icon icon={<FaRegChartBar />} name="Report" />
        </div>

        <div>
           <p className="biHead">SETTINGS</p>
           <Icon icon={<FaSlidersH />} name="Preference" />
           <Icon icon={<BiBadgeCheck />} name="Fees and Pricing" />
           <Icon icon={<FaClipboardList />} name="Audit Logs" />
        </div>

        {/* -------end */}
     </div>
  );
}

export default Sidebar