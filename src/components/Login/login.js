import React, { useState } from "react";
import Axios from 'react';
import {useNavigate} from 'react-router-dom';

function Login() {
        
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')

        const Handle=async(e)=>{
                    e.preventDefault();
                    console.log(name,password)
                    const url=""
                    const data=await Axios(url,{name,password})
                    console.log(data)
        }
        const HandleReset = (e) => {
            e.target.value= "";
        }
 let navigate = useNavigate();
return (
    <div className='w-full h-screen'>
        
        <div className='h-1/10 text-center'>
           
            <div className='text-center w-full items-center'>
                <form className='w-5/5 bg-white rounded-none' >
                
                    <div className="input-field divname">
                        <label className="m-2 p-5 " htmlFor="name" >Username</label>
                        <input type="name" className="border rounded-sm border-solid  my-2 ml-2 mr-8 p-1 mt-40  " value={name}
                         onChange={(e)=>setName(e.target.value)} required />
                    </div>
                    
                    <div className="input-field">
                        <label className="m-2 p-5" htmlFor="password">Password </label>
                        <input type="password" className="border rounded-sm border-solid  my-2 ml-2 mr-8 p-1" value={password}
                         onChange={(e)=>setPassword(e.target.value)} required/>
                    </div>
        
                    <div className='mt-4'>
                        <button className=' rounded cursor-pointer h-10 mr-1 mb-5 ml-24 text-white sm:w-30 bg-[#0083CA] w-20 ' onClick={(e)=>HandleReset(e)}>Reset</button>
                        <button className='rounded cursor-pointer h-10 mr-5 mb-5 ml-16 text-white  sm:w-30 bg-[#0083CA] w-20 ' onClick={(e)=>Handle(e)}>Submit</button>
                        <br></br>
                        <button className='h-10 w-40 text-white mb-5 mr-5 ml-24 sm:text-sm rounded bg-[#0083CA] cursor-pointer max-w-md:w-0' 
                        onClick={() => navigate('/resetPassword')}>  Forgot Password  </button>
                        
                    </div>
                </form>
            </div>
        </div>

        

    </div>
)

}

export default Login;