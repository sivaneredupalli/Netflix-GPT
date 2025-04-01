import React, { useRef, useState } from 'react'
import checkFormValidation from '../utils/validate'
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from '../utils/firebase';
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/userSlice';
const Login = () => {
  const dispatch = useDispatch()
  const [signUpUser,setSignUpUser] = useState(false)
  const [errorMessage,setErrorMessage]=useState(null)
  const navigator = useNavigate()
  const Email = useRef(null);
  const Password = useRef(null)
  const FullName = useRef(null)
  const formValidation =()=>{
    const message = checkFormValidation(Email.current.value,Password.current.value);
    setErrorMessage(message)
    if(message) return;
    if(signUpUser)
    {
      //SignUp User
      createUserWithEmailAndPassword(auth, Email.current.value,Password.current.value,FullName.current.value)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    console.log(user)
    updateProfile(user, {
      displayName: FullName.current.value
    }).then(() => {
      // Profile updated!
      const { uid, email, displayName } = user;
              dispatch(addUser({ uid, email, displayName }));
      // navigator('/browser')
      // ...
    }).catch((error) => {
      // An error occurred
      setErrorMessage(error.message)
    });
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
    else{
      //SignIn User
signInWithEmailAndPassword(auth, Email.current.value,Password.current.value)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    console.log(user)
    navigator('/browser')
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    setErrorMessage(errorCode+"-"+errorMessage)
  });
    }
  }
    const toggleSignUp = ()=>{
    setSignUpUser(!signUpUser) 
  }
  return (
    <div>
      <div className='absolute w-screen px-8 py-2 bg-gradient-to-b from-black  text-4xl'>
      <img className='w-44' src='https://help.nflxext.com/helpcenter/OneTrust/oneTrust_production/consent/87b6a5c0-0104-4e96-a291-092c11350111/01938dc4-59b3-7bbc-b635-c4131030e85f/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png' alt='background image'/>
    </div>
    <form onSubmit={(e)=>e.preventDefault()} className='bg-black absolute text-white m-auto right-0 left-0 w-3/12 p-12 my-18 opacity-85'>
    <h1 className='text-3xl font-bold my-4'>{!signUpUser ? "Sign In" : "Sign Up"}</h1>
    {signUpUser && <input type='text' ref={FullName} className='p-2 my-4  bg-gray-300 text-black rounded w-full'  placeholder='Full Name'/>}
      <input type='text' ref={Email} className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='Email address'/> 
      <input type='text' ref={Password} className='p-2 my-4  bg-gray-300 text-black rounded w-full' placeholder='Password'/>
      {signUpUser && <p className='p-2   text-lg text-red-500'>{errorMessage}</p>}
      {!signUpUser && <p className='p-2   text-lg text-red-500'>{errorMessage}</p>}
      <button onClick={formValidation} className='cursor-pointer p-2 my-4 font-bold bg-red-600 text-white rounded w-full'>{!signUpUser ? 'Sign In' : 'Sign Up'}</button>
      <p className='my-5 cursor-pointer' onClick={toggleSignUp}>{signUpUser ? "Already Registered User? Sign In Now." : "New to Netflix? Sign up now."} </p>
    </form>
    <div className=''>
      <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f6e7f6df-6973-46ef-b98f-12560d2b3c69/web/IN-en-20250317-TRIFECTA-perspective_26f87873-6014-460d-a6fb-1d96d85ffe5f_large.jpg' alt='background image'/>
    </div>
    </div>
  )
}
export default Login