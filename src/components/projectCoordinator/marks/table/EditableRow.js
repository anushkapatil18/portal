import React from "react";
function EditableRow({editFormData,HandleEditFormChange,handleCancelClick}) {
  return (
    <>
      <tr className="border-b">
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          {/* Drowpdown menu */}
          <select
            className="block w-full border border-black w-full"
            name="type"
            required="required"
            onChange={HandleEditFormChange}
            value={editFormData.type}
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
            onChange={HandleEditFormChange}
            value={editFormData.title}
          />
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          <input
            type="text"
            placeholder="Enter Max Marks"
            className="black border"
            required="required"
            name="mmarks"
            onChange={HandleEditFormChange}
            value={editFormData.mmarks}
          />
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          <input
            type="text"
            placeholder="Enter Weightage Marks"
            className="black border"
            name="wmarks"
            onChange={HandleEditFormChange}
            value={editFormData.wmarks}
          />
        </td>
        <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">
          <input
            type="date"
            placeholder="Enter due date"
            className="black border"
            name="due"
            onChange={HandleEditFormChange}
            value={editFormData.due}
          />
        </td>
        <td className="text-sm text-black px-6 py-4 whitespace-nowrap border-b border-r">
        <button type="submit" className="text-sm text-black px-4 py-2 whitespace-nowrap bg-slate-300 rounded-md" >Save</button><a>  </a>
        
        <button type="button" onClick={handleCancelClick} className="text-sm text-black px-4 py-2 whitespace-nowrap bg-slate-300 rounded-md">
          Cancel
        </button>
      </td>
      </tr>
    </>
  );
}
export default EditableRow;
