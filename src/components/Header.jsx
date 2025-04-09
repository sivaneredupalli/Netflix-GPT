import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SignOut_Image } from '../utils/Constants';

const Header = () => {
    const dispatch = useDispatch()
    const navigator = useNavigate()
    const user = useSelector(Store => Store.user);
      useEffect(() => {
       const unsubscribe = onAuthStateChanged(auth, (user) => {
          if (user) {
            const { uid, email, displayName } = user;
            dispatch(addUser({ uid, email, displayName }));
            navigator('/browser')
          } else {
            dispatch(removeUser());
            navigator('/')
          }
        });
        return () => unsubscribe(); // Cleanup subscription
      }, []);

      const handleSignOut = ()=>{
        signOut(auth).then(() => {
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
        });
      }
  return (
    <div className='flex justify-between items-center px-8 py-2 absolute top-0 left-0 w-full z-2 bg-gradient-to-b from-black'>
    <div className=' px-8 py-2 text-4xl'>
    <img className='w-44' src={LOGO_URL} alt='background image'/>
  </div>
  {user && <div className='mr-4 my-6 flex'>
  <img className='w-10 h-10 rounded' src={SignOut_Image} alt="SignOut Image"/>
  <button  onClick={handleSignOut} className='text-white font-bold cursor-pointer'>(SignOut)</button>
  </div>}
  </div>
  )
}

export default Header