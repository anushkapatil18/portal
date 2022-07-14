import React, { useState, Fragment } from "react";
import data from "./table/mock-data.json";
import { nanoid } from "nanoid";
import EditableRow from "./table/EditableRow";
import ReadOnlyRow from "./table/ReadOnlyRow";
import Done from "../../Confirmation/Done";

const MarkDist = () => {
  //modal 
  let [openModal, setOpenModal] = useState(false);
  const [contacts, setContacts] = useState(data);
  const [addFormData, setAddFormData] = useState({
    type: "",
    title: "",
    mmarks: "",
    wmarks: "",
    due: "",
  });
  const [editContactId, setEditContactId] = useState(null);
  const [editFormData,setEditFormData]=useState({
    type: "",
    title: "",
    mmarks: "",
    wmarks: "",
    due: "",
  }
    
  )
  const handleAddFormChange = (event) => {
    event.preventDefault();

    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...addFormData };
    newFormData[fieldName] = fieldValue;

    setAddFormData(newFormData);
  };
  const HandleEditFormChange = (event) =>{
    const fieldName = event.target.getAttribute("name");
    const fieldValue = event.target.value;

    const newFormData = { ...editFormData };
    newFormData[fieldName] = fieldValue;

    setEditFormData(newFormData);

  }
  const handleAddFormSubmit = (event) => {
    event.preventDefault();

    const newContact = {
      id: nanoid(),
      type: addFormData.type,
      title: addFormData.title,
      mmarks: addFormData.mmarks,
      wmarks: addFormData.wmarks,
      due: addFormData.due,
    };

    const newContacts = [...contacts, newContact];
    setContacts(newContacts);
  };
  const handleEditFormSubmit = (event) => {
    event.preventDefault();

    const editedContact = {
      id: editContactId,
      type: editFormData.type,
      title: editFormData.title,
      mmarks: editFormData.mmarks,
      wmarks: editFormData.wmarks,
      due: editFormData.due,
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
      type: contact.type,
      title: contact.title,
      mmarks: contact.mmarks,
      wmarks: contact.wmarks,
      due: contact.due,
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


  return (
    <>
      {/*<div className="justify-center items-center flex flex-col mt-5 w-full">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 my-5 ">
            <div className="overflow-hidden">
              <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
                <thead>
                  <tr className=" nav-col text-white text-sm">
                    <th className="px-4 py-2  rounded-tl-md">Review</th>
                    <th className="px-4 py-2 rounded-tr-md">
                      Max Marks to ALlocate
                    </th>
                  </tr>
                </thead>
                <tbody className="border-br rounded-md">
                  <tr className="border-b">
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      Review 1
                    </td>
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      30
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      Review 2
                    </td>
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      30
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      Review 3
                    </td>
                    <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                      60
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
  </div>*/}
   <div className="flex flex-col items-center justify-center w-full mt-10">
                
                <select className="px-4 py-2 border w-60">
                  <option value="">-REVIEW-</option>
                  <option value="review1">Review 1</option>
                  <option value="review2">Review 2</option>
                  <option value="review3">Review 3</option>

                </select>
              </div>
      <div className="flex items-center justify-center mt-5 w-full">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
             
              <form onSubmit={handleAddFormSubmit}>
                <table className="mt-10 rounded-md text-center px-6 py-4 whitespace-nowrap">
                  <thead>
                    <tr className=" nav-col text-white text-sm">
                      <th className="px-4 py-2  rounded-tl-md">
                        *Assessment Type
                      </th>
                      <th className="px-4 py-2  ">Assessment Title</th>
                      <th className="px-4 py-2  ">*Max Marks</th>
                      <th className="px-4 py-2  ">Weightage Marks</th>
                      <th className="px-4 py-2 rounded-tr-md">Due Date</th>
                    </tr>
                  </thead>
                  <tbody className="border-br rounded-md">
                    <tr className="border-b">
                      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                       
                        <select
                          className="block w-full border border-black w-full"
                          name="type"
                          required="required"
                          onChange={handleAddFormChange}
                        >
                          <option value="" disabled={true} selected="true">
                            Select Assessment Type
                          </option>
                          <option value="Review 1">Review 1</option>
                          <option value="Review 2">Review 2</option>
                          <option value="Review 3">Review 3</option>
                        </select>
                      </td>
                      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                        <input
                          type="text"
                          placeholder="Enter assessment title"
                          className="black border"
                          name="title"
                          onChange={handleAddFormChange}
                        />
                      </td>
                      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                        <input
                          type="text"
                          placeholder="Enter Max Marks"
                          className="black border"
                          required="required"
                          name="mmarks"
                          onChange={handleAddFormChange}
                        />
                      </td>
                      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                        <input
                          type="text"
                          placeholder="Enter Weightage Marks"
                          className="black border"
                          name="wmarks"
                          onChange={handleAddFormChange}
                        />
                      </td>
                      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
                        <input
                          type="date"
                          placeholder="Enter due date"
                          className="black border"
                          name="due"
                          onChange={handleAddFormChange}
                        />
                      </td>
                    </tr>
                  </tbody>
                </table>
                <div className="my-5 flex items-center justify-center  w-full">
                  <button
                    type="submit"
                    className=" nav-col hover:bg-blue-500 text-white font-bold py-2 px-4 rounded"
                  >
                    Add
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center  w-full">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              
              <form onSubmit={handleEditFormSubmit}>
                <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
                  <thead>
                    <tr className=" nav-col text-white text-sm">
                      <th className="px-4 py-2  rounded-tl-md">
                        *Assessment Type
                      </th>
                      <th className="px-4 py-2  ">Assessment Title</th>
                      <th className="px-4 py-2  ">*Max Marks</th>
                      <th className="px-4 py-2  ">Weightage Marks</th>
                      <th className="px-4 py-2  ">Due Date</th>
                      <th className="px-4 py-2 rounded-tr-md">Edit</th>
                    </tr>
                  </thead>
                  <tbody className="border-br rounded-md">
                    {contacts.map((contact) => (
                      <Fragment>
                        {editContactId === contact.id ? (
                          <EditableRow editFormData={editFormData} HandleEditFormChange={HandleEditFormChange} handleCancelClick={handleCancelClick} />
                        ) : (
                          <ReadOnlyRow contact={contact} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} />
                        )}
                      </Fragment>
                    ))}
                  </tbody>
                </table>
              </form>
              
            </div>
          </div>
        </div>
      </div>
      <div className="flex block justify-center items-center mt-2 mb-1">
      <p className=" flex text-red-700 ">This will freeze the rubrics</p></div>
      <div className="flex block justify-center items-center mt-2 mb-5">
        
      <button type='submit' className=" nav-col hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" onClick={() => setOpenModal(true)} >Submit</button>
                      {openModal && <Done setOpenModal={setOpenModal}/>}
      </div>
    </>
  );
};

export default MarkDist;
