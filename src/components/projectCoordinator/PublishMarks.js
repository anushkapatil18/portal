import React, { useState, Fragment } from "react";
import data from './tablePC/mock-data.json';
import ReadOnlyRow from "./tablePC/ReadOnlyRow";
import ReactPaginate from "react-paginate";

const PublishMarks = () => {
  const [contacts, setContacts] = useState(data);
  const [pageNumber, setPageNumber] = useState(1);

  const [usersPerPage,setUserPerPage] = useState(3);
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

  const [editFormData, setEditFormData] = useState({
    eid: "",
    name: "",
    marks: "",
  });

  const [editContactId, setEditContactId] = useState(null);




  const handlePublishClick = (event, contact) => {
   
  };


  const handleDefaultersClick = (contactId) => {
    
  };

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
    <div className="flex items-center justify-center mt-22 sm:mt-10">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <h1 className="flex items-center justify-center text-3xl text-bold">Publish Marks</h1>
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              
      <form>
        <div className="text-sm px-4 py-2 text-right">
          Show Entries &nbsp;<input className="border w-10" type="number"  onChange={(e) => handleSetEntries(e)}/>
        </div>
        <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
          <thead>
            <tr className=" nav-col text-white text-lg">
              <th className="px-4 py-2  rounded-tl-md">Employee ID</th>
              <th className="px-4 py-2  ">Name</th>
              <th className="px-4 py-2 ">Marks</th>
              <th className="px-4 py-2 rounded-tr-md">Actions</th>
            </tr>
          </thead>
 {contacts && contacts.length > 0 ? 
          <tbody className="border-br rounded-md">
            {contacts.slice(pagesVisited, pagesVisited + usersPerPage).map((contact) => (
              <Fragment>
                  
                  <ReadOnlyRow 
                    key = {contact.id}
                    contact={contact}
                    handlePublishClick={handlePublishClick}
                    handleDefaultersClick={handleDefaultersClick}
                  />
              </Fragment>
            ))}
          </tbody> : 'NO DATA' }
        </table>
      </form>
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
    </div>
    </div>
    </div>
    </div>
    </>
  );
};


export default PublishMarks;
