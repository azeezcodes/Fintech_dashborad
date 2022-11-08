import React, {
   useState,
   useEffect,
   ReactNode,
   useMemo,
} from "react";
import Tablehead from "./Tablehead";
import { Link } from "react-router-dom";
import { BiFilter, BiDotsVerticalRounded } from "react-icons/bi";
import OrganModal from "./OrganModal";
import Viewdetail from "./Viewdetail";
import { log } from "console";

interface RNode {
   children: ReactNode;
}

let PageSize = 10;

const Table = () => {
   const [Data, setData] = useState([]);
   const [show, setShow] = useState(false)
   const [view, setView] = useState(false)
   const [loading, setLoading] = useState(true)
   const [recordPage] = useState(6)
   const [currentPage, setCurrentPage] = useState(1);

   useEffect(() => {
      fetch(`https://6270020422c706a0ae70b72c.mockapi.io/lendsqr/api/v1/users`)
         .then((response) => {
            if (!response.ok) {
               throw new Error(
                  `This is an HTTP error: The status is ${response.status}`
               );
            }
            return response.json();
         })
         .then((actualData) => {setData(actualData);  setLoading(false);})
      
         .catch((err) => {
            console.log(err.message);
         });
   }, []);
   
   


   const indexofLastpage = currentPage * recordPage

    const currentTableData = useMemo(() => {
       const firstPageIndex = (currentPage - 1) * PageSize;
       const lastPageIndex = firstPageIndex + PageSize;
       return Data.slice(firstPageIndex, lastPageIndex);
    }, [currentPage]);
   
   
   

   const showModal = () => {
   setShow(!show)
}
   const viewModal = () => {
      setView(!view)
    
}

   return (
      <div>
         <table className="alltable">
            <thead>
               <tr>
                  <th>
                     <div className="taghead" onClick={showModal}>
                        <p>ORGANIZATION</p>

                        <BiFilter />
                     </div>
                     <div className="modalorganization">
                        {show && <OrganModal />}
                     </div>
                  </th>
                  <th>
                     <div className="taghead">
                        <p>USERNAME</p>
                        <BiFilter />
                     </div>
                  </th>
                  <th>
                     <div className="taghead">
                        <p>EMAIL</p>
                        <BiFilter />
                     </div>
                  </th>
                  <th>
                     <div className="taghead">
                        <p>PHONE NUMBER</p>
                        <BiFilter />
                     </div>
                  </th>
                  <th>
                     <div className="taghead">
                        <p>DATE JOINED</p>
                        <BiFilter />
                     </div>
                  </th>
                  <th>
                     <div className="taghead">
                        <p>STATUS</p>
                        <BiFilter />
                     </div>
                  </th>
                  <th>
                     <div></div>
                  </th>
               </tr>
            </thead>

            <tbody>
               {Data.map(
                  (item: {
                     id: string;
                     userName: string;
                     email: string;
                     phoneNumber: string;
                     createdAt: string;
                  }) => {
                     
                     return (
                        <tr className="tabRoll" key={item.id}>
                           <td>
                              <p>Lendsqr</p>
                           </td>
                           <td>{item.userName}</td>
                           <td>{item.email}</td>
                           <td>{item.phoneNumber}</td>
                           <td>{new Date(item.createdAt).toDateString()}</td>

                           <td>
                              <p>Active</p>
                           </td>
                           <Link to={`/users/${item.id}`}>
                              <td>
                                 <BiDotsVerticalRounded
                                    onClick={viewModal}
                                    style={{ fontSize: "1.2rem" }}
                                 />
                              </td>
                           </Link>
                        </tr>
                     );
                  }
               )}

               <div className="viewing">{view && <Viewdetail />}</div>

            </tbody>
         </table>
         {/* <Pagination
            className="pagination-bar"
            currentPage={currentPage}
            totalCount={Data.length}
            pageSize={PageSize}
            onPageChange={(page) => setCurrentPage(page)}
         /> */}
      </div>
   );
};

export default Table;
