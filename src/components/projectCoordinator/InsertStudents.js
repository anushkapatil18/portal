import React from 'react'
import { useState } from 'react';
import xlsx, { readFile, utils } from 'xlsx';
import {CSVLink , CSVDownload} from "react-csv";
// import DownloadIcon from '@mui/icons-material/Download';


const InsertStudents = () => {


  <script type="text/javascript" src="https://oss.sheetjs.com/sheetjs/xlsx.full.min.js"></script>

  const initialValues = { Year:"" , Semester:"", Course:""};
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const [FileName , setFileName] = useState(null);


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };


  const dataa=[
    {Reg_no:"" , Student_Name:"" ,Email_ID:"" },
    {Reg_no:"" , Student_Name:"" ,Email_ID:"" } 
  ]

  const headers = [
    {label:'Employee ID' , key:'Reg_no'},
    {label:'Faculty Name' , key:'Student_Name'},
    {label:'Email ID' , key:'Email_ID'}
  ];

  const csvReport = {
    filename : 'file.csv',
    headers : headers ,
    data : dataa
  };

  

  async function handleFileAsync(e) {
    const file = e.target.files[0];

    setFileName(file.name);

    const data = await file.arrayBuffer();
    const workbook = readFile(data);

    const worksheet = workbook.Sheets[workbook.SheetNames[0]];
    const jsonData = utils.sheet_to_json(worksheet) ;

    console.log(jsonData);

  // const headers = [
  //   {label:'Reg_no' , key:'Reg_no'},
  //   {label:'Student_Name' , key:'Student_Name'},
  //   {label:'Email_ID' , key:'Email_ID'}
  // ];

  // const csvLink = {
  //   filename : {FileName},
  //   headers : headers ,
  //   data : jsonData
  // };

  }

  return (


    <div className="flex items-center justify-center mt-32 sm:mt-20">
    <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
        <div className="overflow-hidden">
   

    {/*<pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}


    
      <form onSubmit={handleSubmit}>
      <table className="min-w-full text-center sm:text-sm">
        <tbody>


        <tr>
        <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Year">Year</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        
            <select className=" w-60 border" name="Year" value={formValues.Year} onChange={handleChange}>
            <option value="">-SELECT-</option>
            <option value="2020">2020</option>
                <option value="2021">2021</option>
                <option value="2022">2022</option>
                <option value="2023">2023</option>
                <option value="2024">2024</option>
                <option value="2025">2025</option>
                <option value="2026">2026</option>
                <option value="2027">2027</option>
            </select>
          </td>
          </tr>


<tr>
<td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Semester">Semester</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
         
            <select className=' w-60 border ' name="Semester" value={formValues.Semester} onChange={handleChange}>
            <option value="">-SELECT-</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
            </select>
  </td>
</tr>


<tr>
<td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Course">Course</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
          
            <select className=' w-60 border ' name="Course" value={formValues.Course} onChange={handleChange}>
            <option value="">-SELECT-</option>
            <option value="Web Tech">Web Tech</option>
            </select>
  </td>
</tr>
<tr>
  <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="upload">Upload File</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
        
            <input className='w-40' name="filename" type="file" id="myFile" onChange={(e)=> handleFileAsync(e)} ></input>
           
            &nbsp;&nbsp;&nbsp;
            <CSVLink {...csvReport} className="text-blue-600 underline">&#10515;Template</CSVLink>
            </td>
</tr>



        </tbody>
        </table>

        



      </form>

    </div>
    </div>
    <div className='flex items-center justify-center'> 
<button type='submit' className=" nav-col text-lg hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md" >Submit</button>
</div>
    </div>
    </div>
  )
}


export default InsertStudents;