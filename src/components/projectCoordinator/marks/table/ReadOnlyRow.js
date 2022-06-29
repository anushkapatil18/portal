import React from "react";
function ReadOnlyRow({ contact, handleEditClick,handleDeleteClick }) {
  return (
    <>
      <tr className="border-b">
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {contact.type}
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {contact.title}
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {contact.mmarks}
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {contact.wmarks}
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {contact.due}
        </td>
      
        <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r mt-2 pt-2">
          <button
            type="button"
            onClick={(event) => handleEditClick(event, contact)}
            className="bg-slate-300 text-sm text-black px-4 py-2 whitespace-nowrap rounded-md"
          >
            Edit
          </button><a>  </a>
        
          <button
            type="button"
            onClick={() => handleDeleteClick(contact.id)}
            className="bg-slate-300 text-sm text-black px-4 py-2 whitespace-nowrap rounded-md"
          >
            Delete
          </button>
        </td>
      </tr>
    </>
  );
}
export default ReadOnlyRow;
