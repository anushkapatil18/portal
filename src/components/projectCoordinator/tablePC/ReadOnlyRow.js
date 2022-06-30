import React from "react";

const ReadOnlyRow = ({ contact, handleEditClick, handleDeleteClick }) => {
  return (
    <tr className="border-b">
      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">{contact.eid}</td>
      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.name}</td>
      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.marks}</td>
      <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.panel_no}</td>
      <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r">
        <button
          type="button"
          onClick={(event) => handleEditClick(event, contact)} className="bg-slate-300 text-sm text-black px-4 py-2 whitespace-nowrap rounded-md"
        >
          Publish 
        </button><a>  </a>
        <button type="button" onClick={() => handleDeleteClick(contact.id)} className="bg-slate-300 text-sm text-black px-4 py-2 whitespace-nowrap rounded-md">
        Defaulters
        </button>
      </td>
    </tr>
  );
};

export default ReadOnlyRow;