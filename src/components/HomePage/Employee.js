import React from 'react';
import {useNavigate} from 'react-router-dom';

const Employee = () => {
    let navigate = useNavigate();
  return (
    <>
    <div className='mt-16'>
    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-20 bg-[#f5f4f4]'>
        <div className='main' style={{display:'flex'}} >
            <p style={{margin: '0px 10px 0px 0px',padding:'0px', fontWeight:'bold'}}>Main Coordinator</p><hr style={{width:'100%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/")}>Login</button>
        </div>
    </div>
    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-20 bg-[#dad9d9]'>
        <div className='sub' style={{display:'flex'}}>
            <p style={{margin: '0px 10px 0px 0px',padding:'0px', fontWeight:'bold'}}>Sub Coordinator</p><hr style={{width:'100%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/")}>Login</button>
        </div>
    </div>
    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-20 bg-[#f5f4f4]'>
        <div className='reviewer' style={{display:'flex'}}>
            <p style={{margin: '0px 10px 0px 0px',padding:'0px', fontWeight:'bold'}}>Reviewer</p><hr style={{width:'100%',marginLeft:'4%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/")}>Login</button>
        </div>
    </div>
    <div className='flex flex-col m-auto p-5 text-xl w-4/5 mb-20 bg-[#dad9d9]'>
        <div className='guide' style={{display:'flex'}}>
            <p style={{margin: '0px 10px 0px 0px',padding:'0px', fontWeight:'bold'}}>Guide</p><hr style={{width:'100%',marginLeft:'5%',height:'3px',backgroundColor:'black'}}></hr>
        </div>
        <div style={{display:'flex',justifyContent: 'flex-end'}}>
            <button className='text-white bg-[#0083ca] text-xl relative cursor-pointer px-4 py-2' style={{ top: '40px'}} onClick={(e) => navigate("/")}>Login</button>
        </div>
    </div>
    </div>

    </>
  )
}

export default Employee;