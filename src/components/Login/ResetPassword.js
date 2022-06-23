import React,{useState,Axios} from 'react';
import Done from '../Confirmation/Done';

function ResetPassword () {
  //modal 
  let [openModal, setOpenModal] = useState(false);

    //form elements 
    const [username,setUsername]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [otp,setOtp]=useState('')

   const Handle = async(e) => {
    e.preventDefault();
    const url="";
    console.log(username,password,email,otp)
    const data=await Axios(url,{username,password,email,otp});
    console.log(data)
    setUsername('')
    setPassword('')
    setEmail('')
    setOtp('')
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
                      <label htmlFor='username'>Username</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                      <input placeholder='Username' className='border' id='username' name='username' 
                    onChange={ (e)=>setUsername(e.target.value)} value={username} required/>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='password'>New Password</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input type="password" placeholder='Password' className='border'id='password' name='password' 
                    onChange={(e)=>setPassword(e.target.value)} value={password} required/>
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

                  <tr className="bg-gray-200">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='otp'>OTP</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input placeholder='OTP' className='border' id='otp' name='otp' 
                    onChange={(e)=>setOtp(e.target.value) } value={otp} required/>
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                      
                    <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded" onClick={() => setOpenModal(true)} >&#10003;&nbsp;Confirm</button>
                      {openModal && otp && <Done setOpenModal={setOpenModal}/>}
                    </td>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" >&#9747;&nbsp;Cancel</button>

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