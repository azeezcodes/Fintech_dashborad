import React, { ReactNode } from "react";
import Header from './components/Header'
import Sidebar from './components/Sidebar'
import "./components/styles/Header.scss"

interface RNode {
   children: ReactNode;
}

const Layout = ({ children }: RNode) => {
   return (
      <div>
         <Header />
         <div className="contentBox">
            <div>
               <Sidebar />
            </div>
            <div className="pagechild"> {children}</div>
         </div>
      </div>
   );
};

export default Layout