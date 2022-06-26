import React, { useState, Fragment } from "react";
import data from './table/mock-data.json';
import EditableRow from "./table/EditableRow";
import ReadOnlyRow from "./table/ReadOnlyRow";
import ReactPaginate from "react-paginate";

const UpdateFaculty = () => {
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

  const [editFormData, setEditFormData] = useState({
    eid: "",
    name: "",
    email: "",
  });

  const [editContactId, setEditContactId] = useState(null);


  const handleEditFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

    
  };


 
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      eid: editFormData.eid,
      name: editFormData.name,
      email: editFormData.email,
    };

    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === editContactId);

    newContacts[index] = editedContact;

    setContacts(newContacts);
    setEditContactId(null);
  };

  const handleEditClick = (event, contact) => {
    event.preventDefault();
    setEditContactId(contact.id);

    const formValues = {
      eid: contact.eid,
      name: contact.name,
      email: contact.email,
    };

    setEditFormData(formValues);
  };

  const handleCancelClick = () => {
    setEditContactId(null);
  };

  const handleDeleteClick = (contactId) => {
    const newContacts = [...contacts];

    const index = contacts.findIndex((contact) => contact.id === contactId);

    newContacts.splice(index, 1);

    setContacts(newContacts);
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
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
      <form onSubmit={handleEditFormSubmit}>
        <div className="text-sm px-4 py-2 text-right">
          Show Entries &nbsp;<input className="border w-10" type="number"  onChange={(e) => handleSetEntries(e)}/>
        </div>
        <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
          <thead>
            <tr className=" nav-col text-white text-lg">
              <th className="px-4 py-2  rounded-tl-md">Employee ID</th>
              <th className="px-4 py-2  ">Name</th>
              <th className="px-4 py-2 ">Email</th>
              <th className="px-4 py-2 rounded-tr-md">Actions</th>
            </tr>
          </thead>
          <tbody className="border-br rounded-md">
            {contacts.slice(pagesVisited, pagesVisited + usersPerPage).map((contact) => (
              <Fragment>
                {editContactId === contact.id ? (
                  <EditableRow
                    key={contact.id}
                    editFormData={editFormData}
                    handleEditFormChange={handleEditFormChange}
                    handleCancelClick={handleCancelClick}
                  />
                ) : (
                  <ReadOnlyRow 
                  key = {contact.id}
                    contact={contact}
                    handleDeleteClick={handleDeleteClick}
                    handleEditClick={handleEditClick}
                  />
                  )}
              </Fragment>
            ))}
          </tbody>
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


export default UpdateFaculty;