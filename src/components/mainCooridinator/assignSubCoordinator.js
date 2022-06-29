import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const AssignSubCoordinator = () => {

  const initialValues = { Year:"" , Semester:"" , School:"" , Course:"", username: "", password: "vit123" };
  const [formValues, setFormValues] = useState(initialValues);
  const [isSubmit, setIsSubmit] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmit(true);
  };

  const HandleReset = ()=>{

  };
 const navigate = useNavigate();
  return (
    <>
             <div className="flex items-center justify-center mt-32 sm:mt-20">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
              <form action="post" 
              onSubmit={(e)=> handleSubmit(e) }>
              <table className="min-w-full text-center sm:text-sm">
                <tbody>
                  <tr>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap">
                      <label htmlFor='Year'>Year</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select className='border w-60' name="Year" value={formValues.Year} onChange={handleChange}>
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
                  
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='Semester'>Semester</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select className='border w-60'  name="Semester" value={formValues.Semester} onChange={handleChange}>
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
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='School'>School</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select className='border w-60'  name="School" value={formValues.School} onChange={handleChange}>                
            <option value="">-SELECT-</option>
            <option value="SITE">SITE</option>

            </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='Course'>Course</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <select className='border w-60'  name="Course" value={formValues.Course} onChange={handleChange}>
            <option value="">-SELECT-</option>
            <option value="Web Tech">Web Tech</option>
            </select>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='username'>Username</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input className='border w-60' 
              type="text"
              name="username"
              placeholder="Username"
              value={formValues.username}
              onChange={handleChange}
            />
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='password'>Password</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input className='border pass w-60'
              type="password"
              name="password"
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
            />
                    </td>
                  </tr>

                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                      
                  <button type="submit" className="bg-[#0083CA] hover:bg-blue-700 text-white font-bold ml-8 py-1.5 px-6 rounded-md" >Submit</button>
                    </td>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                   <button  className="bg-[#0083CA] hover:bg-blue-700 text-white font-bold ml-8 py-1.5 px-6 rounded-md" onClick={(e) => navigate("/")} >Reset</button>

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
export default AssignSubCoordinator;