import React, { useState, Fragment } from "react";
import data from './table/mock-data.json';
import ReactPaginate from "react-paginate";

const DisplayFaculty = () => {
  const [contacts, setContacts] = useState(data);
  const [pageNumber, setPageNumber] = useState(1);

  const [usersPerPage,setUserPerPage] = useState(6);
  const pagesVisited = pageNumber * usersPerPage;

  const pageCount = Math.ceil(contacts.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  {/*
   useEffect(() => {
    const fetchUsers = async () => {
      const res = await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us');
      setLoading(false);
      setContacts(res.data);

      setTotalPages(Math.ceil(res.data.length / USER_PER_PAGE));
    };
    fetchUsers();
  }, []);
*/}


  const handleSetEntries = (e) => {
    if(Number(e.target.value)>0){
      setUserPerPage(Number(e.target.value));
    }
    else if(Number(e.target.value)<=0){
      setUserPerPage(6);
    }
  }
  return (
    <>

    <div className="flex items-center justify-center mt-22 sm:mt-10 w-full">
    
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
        <h1 className="flex items-center justify-center text-4xl bold mb-2">Faculty List</h1>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
          
            <div className="overflow-hidden">
          
        
        <div className="px-4 py-2 mb-2">
        
         <a className="float-right text-sm mb-2"> Show Entries &nbsp;<input className="border w-10" type="number"  onChange={(e) => handleSetEntries(e)}/> </a>
        </div>
        <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
          <thead>
            <tr className=" nav-col text-white text-lg">
              <th className="px-4 py-2  rounded-tl-md">Employee ID</th>
              <th className="px-4 py-2  ">Name</th>
              <th className="px-4 py-2 rounded-tr-md">Email</th>
            </tr>
          </thead>
          <tbody className="border-br rounded-md">
            {contacts.slice(pagesVisited, pagesVisited + usersPerPage).map((contact) => (
              <tr className="border-b">
              <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">{contact.eid}</td>
              <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.name}</td>
              <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      <ReactPaginate
        previousLabel={"Previous"}
        nextLabel={"Next"}
        pageCount={pageCount}
        onPageChange={changePage}
        containerClassName={"paginationBttns"}
        previousLinkClassName={"previousBttn"}
        nextLinkClassName={"nextBttn"}
        disabledClassName={"paginationDisabled"}
        activeClassName={"paginationActive"}
      /> 
      {/*<div className="justify-center ml-76 items-end text-right text-sm">
        <button className="border bg-slate-300 px-4 py-2 mt-2 hover:bg-slate-500 rounded-md" onClick={() => previousPage()}>Previous</button>
        <button className="border bg-slate-300  px-4 py-2 mt-2 hover:bg-slate-500 rounded-md" onClick={() => nextPage()}>Next</button>
      </div>*/}
    </div>
    </div>
    </div>
    </div>
    </>
  );
};


export default DisplayFaculty;