import React, { useState } from 'react'


const Login = () => {
  const [signUpUser,setSignUpUser] = useState(false)
  const toggleSignUp = ()=>{
    setSignUpUser(!signUpUser)
  }
  return (
    <div>
      
      <div className='absolute w-40 bg-gradient-to-b from-black mx-4 text-4xl'>
      <img src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='background image'/>
    </div>
    <form className='bg-black absolute text-white m-auto right-0 left-0 w-4/12 p-16 my-16 opacity-80'>
    <h1 className='text-3xl font-bold my-4'>{signUpUser ? 'Sign Up' : 'Sign In'}</h1>
      {!signUpUser && (<input type='text' className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='User Name'/>)}
      {signUpUser && (<input type='text' className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='Phone Number'/>)}
      {signUpUser && (<input type='text' className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='Full Name'/>)}
      <input type='text' className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='Password'/>
      <button className='cursor-pointer p-2 my-4 font-bold bg-red-600 text-white rounded w-full'>{!signUpUser ? 'Sign In' : 'Sign Up'}</button>
      <p className='my-5 cursor-pointer' onClick={toggleSignUp}>{!signUpUser ? "New to Netflix? Sign up now." : "Already Registered User? Sign In Now."} </p>
    </form>
    
    <div className=''>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg' alt='background image'/>
    </div>
    
    </div>
    
  )
}

export default Login