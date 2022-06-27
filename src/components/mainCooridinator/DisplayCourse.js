import React,{useEffect, useState} from 'react';
import ReactPaginate from "react-paginate";

function DisplayCourse() {
  const [courses,setCourses] = useState([]);
  const [userSearchData,setUserSearchData] = useState([]);
 { /*const [school,setSchool]=useState('')
  const [year,setYear]=useState('')
  const [sem,setSem]=useState('')
const [course,setCourse]=useState('')*/}
  const [pageNumber, setPageNumber] = useState(1);

  const [usersPerPage,setUserPerPage] = useState(5);
  const pagesVisited = pageNumber * usersPerPage;

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
      const data = [
        {school:"SITE", year:"2021",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2020",sem:"Winter",course:"Mtech"},
        {school:"SITE", year:"2020",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2020",sem:"Fall",course:"Btech"},
        {school:"SCOPE", year:"2021",sem:"Winter",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Mtech"},
        {school:"SCOPE", year:"2022",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2022",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2020",sem:"Winter",course:"Mtech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2020",sem:"Fall",course:"Btech"},
        {school:"SCOPE", year:"2021",sem:"Winter",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Mtech"},
        {school:"SCOPE", year:"2022",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2022",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Winter",course:"Mtech"},
        {school:"SITE", year:"2020",sem:"Fall",course:"Btech"},
        {school:"SELECT", year:"2020",sem:"Fall",course:"Btech"},
        {school:"SCOPE", year:"2021",sem:"Winter",course:"Btech"},
        {school:"SITE", year:"2021",sem:"Fall",course:"Mtech"},
        {school:"SCOPE", year:"2022",sem:"Fall",course:"Btech"},
        {school:"SITE", year:"2022",sem:"Fall",course:"Btech"}
      ]
      setCourses(data);
      setUserSearchData(data);
      {/*
       const res = await axios.get('https://randomuser.me/api/?page=1&results=50&nat=us');
      setCourse(data);
      setTotalPages(Math.ceil(course.length / USER_PER_PAGE));
    */}
  },[])
  const pageCount = Math.ceil(userSearchData.length / usersPerPage);

  const handleSetEntries = (e) => {
    if(Number(e.target.value)>0){
      setUserPerPage(Number(e.target.value));
    }
    else if(Number(e.target.value)<=0){
      setUserPerPage(6);
      e.target.value=1;
    }
  }

  

  const HandleSchool = (e) => {
    const newData = courses.filter(x => x.school == e.target.value);
    setUserSearchData(newData);
  }

  const HandleYear = (e) => {
    const newData = userSearchData.filter(x => x.year >= e.target.value);
    setUserSearchData(newData);
  }

  const HandleSem = (e) => {
    const newData = userSearchData.filter(x => x.sem == e.target.value);
    setUserSearchData(newData);
  }

  const HandleCourse = (e) => {
    const newData = userSearchData.filter(x => x.course == e.target.value);
    setUserSearchData(newData);
  }

  const HandleReset = (e) => {
    e.target.value = '';
    setUserSearchData(courses);
  }

  
  return (
    <>
    <div className='justify-center items-center flex flex-col mt-5 w-full'>
    <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
    
    <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
    
      <div className="overflow-hidden">
    <form action="post">
      
      <table className="min-w-full text-center sm:text-sm">
        <tbody>
          <tr>
            <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
              <label htmlFor='school'>School</label>
            </td>
            <td className="text-lg text-black-900 font-light px-6 py-4 whitespace-nowrap ">
            <select className='border w-32' onChange={ (e)=>HandleSchool(e)} required>
            <option value="">-SELECT-</option>
            <option value="SITE">SITE</option>
            <option value="SCOPE">SCOPE</option>
            <option value="SELECT">SELECT</option>
            </select>
            </td>
            
            <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
            <label htmlFor='year'>From Year</label>
            </td>
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
            <select className='border w-32'  onChange={ (e)=>HandleYear(e)}  required>
            <option value="">-SELECT-</option>
            <option value="2020">2020</option>
            <option value="2021">2021</option>
            <option value="2022">2022</option>
            </select>
            </td>
            </tr>
            <tr>
            <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
            <label htmlFor='sem'>Semester</label>
            </td>
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
            <select className='border w-32'  onChange={ (e)=>HandleSem(e)}  required>
            <option value="">-SELECT-</option>
            <option value="Fall">Fall</option>
            <option value="Winter">Winter</option>
            <option value="Summer">Summer</option>
            </select>
            </td>
            
            <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
            <label htmlFor='course'>Course</label>
            </td>
            <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
            <select className='border w-32'  onChange={ (e)=>HandleCourse(e)} required>
            <option value="">-SELECT-</option>
            <option value="Btech">Btech</option>
            <option value="Mtech">Mtech</option>
            </select>
            </td>
            </tr>
            </tbody>
            </table>
          </form>
          </div>
          </div></div></div>
                    
                    <div className="text-lg text-black px-6 py-6 whitespace-nowrap flex flex-col justify-center items-center">
                      
                      <button className="bg-[#0083CA] text-white font-bold ml-8 py-1.5 px-6 rounded-md" onClick={(e) => HandleReset(e)} >Reset</button>
                      </div>
        <div className="flex items-center justify-center  w-full">
    
    <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
    
      <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
      
        <div className="overflow-hidden">
        
                    <h1 className="flex items-center justify-center text-4xl bold mb-2">Course List</h1>
    <div className="px-4 py-2 mb-2">
    
     <a className="float-right text-sm mb-2"> Show Entries &nbsp;<input className="border w-10" type="number"  onChange={(e) => handleSetEntries(e)}/> </a>
    </div>
    <table className=" rounded-md text-center px-6 py-4 whitespace-nowrap">
      <thead>
        <tr className=" nav-col text-white text-lg">
          <th className="px-4 py-2  rounded-tl-md">School</th>
          <th className="px-4 py-2  ">Year</th>
          <th className="px-4 py-2  ">Semester</th>
          <th className="px-4 py-2 rounded-tr-md">Course</th>
        </tr>
      </thead>
      <tbody className="border-br rounded-md">
        {
          userSearchData && userSearchData.length > 0 ?
        
        userSearchData.slice(pagesVisited, pagesVisited + usersPerPage).map((contact,i) => (
          
          <tr className="border-b" key={i}>
          <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r border-l">{contact.school}</td>
          <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.year}</td>
          <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.sem}</td>
          <td className="text-sm text-black px-4 py-2 whitespace-nowrap border-b border-r">{contact.course}</td>
          </tr>
        )) : 'NO DATA'
      }
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
</div>
</div>
</div>
</div>
    </>
  )
}

export default DisplayCourse;