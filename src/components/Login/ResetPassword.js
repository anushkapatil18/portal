import React,{useState,Axios} from 'react';
import Done from '../Confirmation/Done';
import {useNavigate} from 'react-router-dom';

function ResetPassword () {

    //form elements 
    const [username,setUsername]=useState('')
    const [opassword,setOPassword]=useState('')
    const [npassword,setNPassword]=useState('')
    const [email,setEmail]=useState('')

   const Handle = async(e) => {
    e.preventDefault();
    const url="";
    console.log(username,opassword,npassword,email)
    //const data=await Axios(url,{username,opassword,npassword,email});
    if(email != null && npassword!= null && npassword !== opassword){
      navigate("/otp");
    }
   }
   let navigate = useNavigate();
   
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
                      <label htmlFor='username'>Username</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <input placeholder='Username' className='border' id='username' name='username' 
                    onChange={ (e)=>setUsername(e.target.value)} value={username} />
                    </td>
                  </tr>
                  
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='password'>Old Password</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input type="password" placeholder='Password' className='border'id='password' name='password' 
                    onChange={(e)=>setOPassword(e.target.value)} value={opassword} />
                    </td>
                  </tr>
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='password'>New Password</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input type="password" placeholder='Password' className='border'id='password' name='password' 
                    onChange={(e)=>setNPassword(e.target.value)} value={npassword} required />
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='email'>Email Id</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input type="email" placeholder='Email Id' className='border' id='email' name='email'
                    onChange={(e)=>setEmail(e.target.value)} value={email} required/>
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

export default ResetPassword;