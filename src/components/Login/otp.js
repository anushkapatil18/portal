import React,{useState,Axios} from 'react';
import Done from '../Confirmation/Done';
import {useNavigate} from 'react-router-dom';

function Otp () {
  //modal 
  let [openModal, setOpenModal] = useState(false);

    //form elements 
    const [otp,setOtp]=useState('')

   const Handle = async(e) => {
    e.preventDefault();
    const url="";
    //const data=await Axios(url,{otp});console.log(data);
    console.log(otp)
    setOpenModal(true);
    e.target.value="";
   }
   let navigate = useNavigate();
    return  (
    <>
    <div className="flex items-center justify-center mt-32 sm:mt-20">
        <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 ">
            
          <div className="py-2 inline-block min-w-full sm:px-6 lg:px-8 ">
            <div className="overflow-hidden">
            <h1 className="flex items-center justify-center text-4xl bold mb-2">Enter the OTP sent to your email id</h1>
              <form action="post" 
              onSubmit={(e)=> Handle(e) }>
              <table className="min-w-full text-center sm:text-sm">
                <tbody>

                  <tr className="bg-gray-200">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <label htmlFor='otp'>OTP</label>
                    </td>
                    <td className="text-lg text-gray-900 font-light px-6 py-4 whitespace-nowrap ">
                    <input placeholder='OTP' className='border' id='otp' name='otp' 
                    onChange={(e)=>setOtp(e.target.value) } value={otp} />
                    </td>
                  </tr>
                  <tr className="bg-white ">
                    
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                      
                    <button type='submit' className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"  >&#10003;&nbsp;Confirm</button>
                      {openModal && otp && <Done setOpenModal={setOpenModal}/>}
                    </td>
                    <td className="text-lg text-black px-6 py-4 whitespace-nowrap ">
                    <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={() => navigate('/')}>&#9747;&nbsp;Cancel</button>

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

export default Otp;