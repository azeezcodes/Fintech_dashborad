import React from 'react'
import Layout from './Layout'
import Boxicon from './components/Boxicon'
import "./components/styles/Table.scss"
import { HiOutlineUsers, HiOutlineUserGroup } from "react-icons/hi";
import { TbReport } from "react-icons/tb";
import { FaCoins } from "react-icons/fa";

const Win = () => {
  return (
     <Layout>
        <div className="tablebody">
           {/* -------start */}

           <h1>User</h1>
           {/* ---------four square */}
           <div className="allbox">
              <Boxicon
                 icon={<HiOutlineUsers />}
                 title="USERS"
                 count={2456}
                 styles="purple"
              />
              <Boxicon
                 icon={<HiOutlineUserGroup />}
                 title="ACTIVE USERS"
                 count={2456}
                 styles="indigo"
              />
              <Boxicon
                 icon={<TbReport />}
                 title="USERS WITH LOANS "
                 count={12438}
                 styles="orange"
              />
              <Boxicon
                 icon={<FaCoins />}
                 title="USERS WITH SAVINGS"
                 count={102436}
                 styles="red"
              />
        </div>
        {/* ------------------END OF FOUR ICON */}


        {/* table */}


        {/* table end */}

           {/* -----------end */}
        </div>
     </Layout>
  );
}

export default Win;