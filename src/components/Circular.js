import React,{useState,Axios} from 'react';
import Done from '../Confirmation/Done';

function AddCircular () {
  //modal 
  let [openModal, setOpenModal] = useState(false);

    //form elements 
    const [year,setyear]=useState('')
    const [semester,setsem]=useState('')
    const [course,setcourse]=useState('')
    const [circular,setcircular]=useState('')

   const Handle = async(e) => {
    e.preventDefault();
    const url="";
    console.log(year,semester,course,circular)
    const data=await Axios(url,{year,semester,course,circular});
    console.log(data);
   }
    return  (
    <>
    <div className="flex items-center justify-center mt-32 sm:mt-20">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <form action="post" 
              onSubmit={(e)=> Handle(e) }>
              <table className="min-w-full text-center sm:text-sm">
                <tbody>
                  <tr>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                      <label htmlFor='year'>Year</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <select placeholder='Year' className='border block px-16 py-2' id='year' name='year' 
                    onChange={ (e)=>setyear(e.target.value)} value={year} >
                      <option value="2021">2021</option>
                      <option value="2020">2020</option>
                      <option value="2019">2019</option>
                      <option value="2018">2018</option>
                      <option value="2017">2017</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='semester'>Semester</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select type="semester" placeholder='Semester' className='border block px-10 py-2'id='semester' name='semester' 
                    onChange={(e)=>setsem(e.target.value)} value={semester} >
                      <option value="Fall Sem">Fall Sem</option>
                      <option value="Winter Sem">Winter Sem</option>
                      </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='course'>Course</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light block px-6 py-4 whitespace-nowrap ">
                    <select type="course" placeholder='Course' className='border block px-14 py-2' id='course' name='course'
                    onChange={(e)=>setcourse(e.target.value)} value={course} >
                      <option value="CSE1001">CSE1001</option>
                      <option value="ITE1004">ITE1004</option>
                      <option value="CSE1015">CSE1015</option>
                      </select>
                    </td>
                  </tr>

                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='circular'>Circular</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-4 py-4 whitespace-nowrap ">
                    <input type="file" placeholder='Circular' className='border' id='circular' name='circular' 
                    onChange={(e)=>setcircular(e.target.value) } value={circular} />
                      
                    </td>
                  </tr>
                  
                  </tbody>
              </table>
              </form>
            </div>
            <div className="align-content:center bg-white text-lg text-black px-6 py-4 whitespace-nowrap ">
                      
                      <button type='submit' className="align-content:center bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)} >&#10003;&nbsp;Submit</button>
                      {openModal && <Done setOpenModal={setOpenModal}/>}
  
                </div>
          </div>
          
        </div>
      </div>
     
    </>
  ) 
}

export default AddCircular;

