import React,{useState} from "react";

const EditableRow = ({editFormData,handleEditFormChange,handleCancelClick}) => {
  
  return (
    <tr className="border-b">
      <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r border-l" >
        <input
          type="text"
          required="required"
          placeholder="Employee ID..."
          name="eid"
          value={editFormData.eid}
          onChange={handleEditFormChange}
          className="border"
        ></input>
      </td>
      <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r">
        <input
          type="text"
          required="required"
          placeholder="Employee Name"
          name="name"
          value={editFormData.name}
          onChange={handleEditFormChange}
          className="border"
        ></input>
      </td>
      <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r">
        <input
          type="email"
          required="required"
          placeholder="Enter an email..."
          name="email"
          value={editFormData.email}
          onChange={handleEditFormChange}
          className="border"
        ></input>
      </td>
      <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r">
        <button type="submit" className="text-sm text-black px-4 py-2 whitespace-nowrap bg-slate-300 rounded-md" >Save</button><a>  </a>
        
        <button type="button" onClick={handleCancelClick} className="text-sm text-black px-4 py-2 whitespace-nowrap bg-slate-300 rounded-md">
          Cancel
        </button>
      </td>
    </tr>
  );
};

export default EditableRow;