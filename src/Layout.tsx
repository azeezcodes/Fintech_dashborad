import React, { ReactNode } from "react";
import Header from './components/Header'
import Sidebar from './components/Sidebar'

interface RNode {
   children: ReactNode;
}

const Layout = ({ children }: RNode) => {
   return (
      <div>
         <Header />
         <Sidebar />
         {children}
      </div>
   );
};

export default Layout