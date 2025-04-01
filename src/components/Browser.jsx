import { signOut } from 'firebase/auth';
import React from 'react'
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom';


const Browser = () => {
  const navigate = useNavigate()
const handleSignOut = ()=>{
  signOut(auth).then(() => {
    // Sign-out successful.
    navigate('/')
  }).catch((error) => {
    // An error happened.
    navigate('/error')
  });
}
  return (
    <div className='flex justify-between bg-gradient-to-b from-black '>
      <div className=' px-8 py-2 text-4xl'>
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='background image'/>
    </div>
    <div className='mr-4 my-6 flex'>
    <img className='w-10 h-10 rounded' src="https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABXz4LMjJFidX8MxhZ6qro8PBTjmHbxlaLAbk45W1DXbKsAIOwyHQPiMAuUnF1G24CLi7InJHK4Ge4jkXul1xIW49Dr5S7fc.png?r=e6e" alt="SignOut Image"/>
    <button  onClick={handleSignOut} className='text-white font-bold cursor-pointer'>(SignOut)</button>
    </div>
    </div>
    
  )
}

export default Browser