import React,{useState,Axios} from 'react';
import Done from '../Confirmation/Done';

function ProjectAllocation () {
  //modal 
  let [openModal, setOpenModal] = useState(false);

    //form elements 
    const [year,setyear]=useState('')
    const [semester,setsem]=useState('')
    const [school,setschool]=useState('')
    const [course,setcourse]=useState('')
    const [ptype,setType]=useState('')
    const [team,setTeam]=useState('')

   const Handle = async(e) => {
    e.preventDefault();
    const url="";
    console.log(year,semester,school,course,ptype,team)
    const data=await Axios(url,{year,semester,school,course,ptype,team});
    console.log(data);
   }
   const HandleReset = (e) => {
    e.target.value= "";
}
   
    return  (
    <>
    <div className="flex items-center justify-center mt-20">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <form action="post" 
              onSubmit={(e)=> Handle(e) }>
              <table className="min-w-full text-center sm:text-sm">
                <tbody>
                  <tr>
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap">
                      <label htmlFor='year'>Year</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <select placeholder='Year' className='border block w-60 ' id='year' name='year' 
                    onChange={ (e)=>setyear(e.target.value)} value={year} >
                      <option value="">-SELECT-</option>
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='semester'>Semester</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select type="semester" placeholder='Semester' className='border block w-60 'id='semester' name='semester' 
                    onChange={(e)=>setsem(e.target.value)} value={semester} >
                      <option value="">-SELECT-</option>
                      <option value="Fall Sem">Fall Sem</option>
                      <option value="Winter Sem">Winter Sem</option>
                      
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='school'>School</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select type="school" placeholder='School' className='border block w-60 'id='school' name='school' 
                    onChange={(e)=>setschool(e.target.value)} value={school} >
                      <option value="">-SELECT-</option>
                      <option value="SCOPE">SCOPE</option>
                      <option value="SITE">SITE</option>
                      <option value="SENSE">SENSE</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='course'>Course</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light block px-6 py-4 whitespace-nowrap ">
                    <select type="course" placeholder='Course' className='border block w-60 ' id='course' name='course'
                    onChange={(e)=>setcourse(e.target.value)} value={course} >
                      <option value="">-SELECT-</option>
                      <option value="CSE1001">CSE1001</option>
                      <option value="ITE1004">ITE1004</option>
                      <option value="CSE1015">CSE1015</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='ptype'>Project Type</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select type="ptype" placeholder='Project Type' className='border block w-60  ' id='ptype' name='ptype'
                    onChange={(e)=>setType(e.target.value)} value={ptype} >
                      <option value="">-SELECT-</option>
                      <option value="InHouse">In House</option>
                      <option value="Internship">Internship</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='team'>Team/Individual</label>
                    </td>
                    <td className="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select type="team" placeholder='Team' className='border block w-60  ' id='team' name='team'
                    onChange={(e)=>setTeam(e.target.value)} value={team} >
                      <option value="">-SELECT-</option>
                      <option value="Team">Team</option>
                      <option value="Individual">Individual</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <button type='submit' className=" nav-col hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)} >Submit</button>
                    {openModal && <Done setOpenModal={setOpenModal}/>}
                    </td>
                    <td className="text-sm text-black px-6 py-4 whitespace-nowrap ">
                    <button type='submit' className=" nav-col hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={(e) =>  HandleReset(e)} >Reset</button>
                    </td>
                  </tr>
                  
                  </tbody>
              </table>
              </form>
            </div>
            
          </div>
        </div>
      </div>
     
    </>
  ) 
}

export default ProjectAllocation;
