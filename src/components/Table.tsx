import React, {useState, useEffect, ReactNode} from 'react'
import Tablehead from './Tablehead'
import {
   BiFilter
} from "react-icons/bi";


interface RNode {
   children: ReactNode;
}


const Table = () => {
   const [movies, setMovies] = useState([]);

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
         .then((actualData) => setMovies(actualData))
         .catch((err) => {
            console.log(err.message);
         });
   }, []);

   console.log(movies);
   


   return (
      <div>
         <table className="alltable">
            <thead>
               <tr>
                  <th>
                     <div className="taghead">
                        <p>ORGANIZATION</p>
                        <BiFilter />
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


               {
                  movies.map((item: {id:string, userName: string, email: string, phoneNumber: string, createdAt: string }) => {
                     return (

                    

                        <tr className="tabRoll" key={item.id}>
                           <td>
                              <p>Lendsqr</p>
                           </td>
                           <td>{item.userName}</td>
                           <td>{item.email}</td>
                           <td>{item.phoneNumber}</td>
                           <td>{item.createdAt}</td>
                           <td>
                              <p>Active</p>
                           </td>
                           <td>cccc</td>
                        </tr>
                     );
                  })
}




               
              
            </tbody>
         </table>
      </div>
   );
}

export default Table