import React from 'react'
import vitlogo from './logo.png'
import {useNavigate} from 'react-router-dom';
// import './home.css'
const HomeCaps = () => {
  let navigate = useNavigate();
  return (
    <>
    {/* <div className='mt-24 mb-5 flex items-center justify-center' 
      style={{
        // height:'150px', 
        // overflow:'hidden'
        }}>
        <img src={vitlogo} width='16%' />
        <div className='logo1'>
          <div className='text-black m-auto mb-5'>
            <h1 style={{fontSize:'60px',margin:'0px'}}>VIT</h1>
            <hr style={{width:'40%',margin:'0px auto',border:'2px solid black', backgroundColor:'black',width:'100%'}}></hr>
            <p style={{margin:'0px auto',fontWeight:'bold',fontSize:'35px'}}>Vellore Instittue of Technology</p>
            <p style={{margin:'0px auto'}}>(Deemed to be Universitv under section 3 of UGC Act. 1956)</p>
        </div>
      </div>
    </div> */}
    <div className='mt-24 mb-5 flex items-center justify-center'>
    <img src={vitlogo} width='50%' />
    </div>

    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-10 bg-[#f5f4f4]'>
        <div className='w-full ml-2 ' style={{display:'flex'}}>
            <p style={{margin: '0px 30px 0px 0px',padding:'0px', fontWeight:'bold'}}>Students</p><hr style={{width:'100%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/")} >Login</button>
        </div>
    </div>

    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-10 bg-[#dad9d9]'>
        <div className='w-full ml-2' style={{display:'flex'}}>
            <p style={{margin: '0px 30px 0px 0px',padding:'0px', fontWeight:'bold'}}>Employee</p><hr style={{width:'100%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/employee")}>Login</button>
        </div>
    </div>
    <div className='flex flex-col justify-center items-start bg-[#ececec] w-4/5 m-auto mb-20 p-5 text-xl'>
        <p style={{fontWeight:'bold',fontSize:'30px'}}>Circulars</p><br/>
        <ol className='flex flex-col items-start mt-4 ml-16 list-disc'>
          <li className='text-[#0083ca] underline'><a href="#review1" >Review 1</a></li>
          <li className='text-[#0083ca] underline'><a href="#review2" >Review 2</a></li>
          <li className='text-[#0083ca] underline'><a href="#review3" >Review 3</a></li>
          <li className='text-[#0083ca] underline'><a href="#review4" >Review 4</a></li>
        </ol>

    </div>
    </>
  )
}

export default HomeCaps