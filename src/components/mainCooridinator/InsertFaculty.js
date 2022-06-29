import React from 'react'
import { useState } from 'react';
import xlsx, { readFile, utils } from 'xlsx';
import {CSVLink , CSVDownload} from "react-csv";
// import DownloadIcon from '@mui/icons-material/Download';


const InsertFaculty = () => {


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
    {Employee_ID:"" , Faculty_Name:"" ,Email_ID:"" },
    {Employee_ID:"" , Faculty_Name:"" ,Email_ID:"" } 
  ]

  const headers = [
    {label:'Employee ID' , key:'Employee_ID'},
    {label:'Faculty Name' , key:'Faculty_Name'},
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
  //   {label:'Employee_ID' , key:'Employee_ID'},
  //   {label:'Faculty_Name' , key:'Faculty_Name'},
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
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8">
            <div className="overflow-hidden">

    {/* <section className="container flex flex-col items-center justify-center h-screen relative w-screen"> */}

    {/*<pre>{JSON.stringify(formValues, undefined, 2)}</pre> */}


    {/* <form onSubmit={handleSubmit} className="flex flex-col items-center justify-center relative text-center w-4/5 h-screen/2"> */}
      <form onSubmit={handleSubmit} className="items-center justify-center text-center ">
      <table className="min-w-full text-center sm:text-sm ">
        <tbody>

        {/* <div className="ui divider"></div> */}
        {/* <div className="ui form"> */}


        <tr>
                      <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Year">Year</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                        {/* <select
                          className="block w-full border border-black required"
                          name="Year"
                          onChange={(e) => setYear(e.target.value)}
                          value={Year}
                        >
                          <option value="" disabled={true}>
                            Select Year
                          </option> */}


        {/* <div className="field  mb-7 mr-1"> */}
            {/* <label className='m-2.5'>Year</label> */}
            {/* <select className='border border-black' name="Year" value={formValues.Year} onChange={handleChange}> */}
            <select className="block w-6/12 border required" name="Year" value={formValues.Year} onChange={handleChange}>
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
          {/* </div> */}
          </td>
          </tr>


<tr>
  <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Semester">Semester</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
          {/* <div className="field  mb-7 mr-1"> */}
            {/* <label className='m-2.5'>Semester</label> */}
            {/* <select className='border border-black' name="Semester" value={formValues.Semester} onChange={handleChange}> */}
            <select className='block w-6/12 border  required' name="Semester" value={formValues.Semester} onChange={handleChange}>
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
          {/* </div> */}
  </td>
</tr>


<tr>
  <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="Course">Course</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
          {/* <div className="field  mb-7 mr-1"> */}
            {/* <label className='m-2.5'>Course</label>
            <select className='border border-black' name="Course" value={formValues.Course} onChange={handleChange}> */}
            <select className='block w-6/12 border  required' name="Course" value={formValues.Course} onChange={handleChange}>
            <option value="">-SELECT-</option>
            <option value="Web Tech">Web Tech</option>
            </select>
          {/* </div>   */}
  </td>
</tr>
<tr>
  <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="upload">Upload File</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap text-left ">
          {/* <div className="field  mb-7 mr-1"> */}
            {/* <label className='m-2.5'>Course</label>
            <select className='border border-black' name="Course" value={formValues.Course} onChange={handleChange}> */}
            <input className='block w-6/12  required inline' name="filename" type="file" id="myFile" onChange={(e)=> handleFileAsync(e)} ></input>
            {/* </td>
            <td> */}
            &nbsp;&nbsp;&nbsp;
            <CSVLink {...csvReport} className="text-blue-600 underline items-left inline">&#10515;Template</CSVLink>
            </td>
          {/* </div>   */}
  {/* </td> */}
</tr>


{/* 
<tr>
  <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                        <label htmlFor="filename">Upload</label>
                      </td>
                      <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">

          {/* <div className="field  mb-7 ml-12"> */}
            {/* <label className='m-2.5'>Upload File </label> */}
            {/* <input className='block w-6/12 border border-black required' name="filename" type="file" id="myFile" onChange={(e)=> handleFileAsync(e)} ></input> */}
            {/* <input className='border border-black w-52' name="filename" type="file" id="myFile" onChange={(e)=> handleFileAsync(e)} ></input> */}
            {/* <CSVLink {...csvReport} className="ml-2 text-blue-600 underline underline-offset-1">Template</CSVLink> */}
          {/* </div>  */}
        {/* </div> */}
  {/* </td> */}
{/* </tr> */}


        </tbody>
        </table>

        <button className="py-2 font-bold nav-col fluid ui button blue hover:bg-blue-500 text-white w-20 rounded-md mr-8 mt-4">Submit</button>



      </form>
    {/* </section> */}

    </div>
    </div>
    </div>
    </div>
  )
}


export default InsertFaculty;