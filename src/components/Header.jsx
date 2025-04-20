import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SignOut_Image, SUPPORTING_LANGUAGES } from '../utils/Constants';
import { clearGptAndTmdbSearchResults, toggleGPTSearchView } from '../utils/gptSlice';
import { changeLanguage } from '../utils/configSlice';

const Header = () => {
  const showGPTSearch = useSelector(store=>store.gptSearch.showGPTSearch)
   useSelector(store=>store.gptSearch)

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
          dispatch(clearGptAndTmdbSearchResults())
          // Sign-out successful.
        }).catch((error) => {
          // An error happened.
          console.log(error)
        });
      }
     const handleGPTSearchClick=()=>
      {
        //Toggle search functionality
        dispatch(toggleGPTSearchView())
        dispatch(clearGptAndTmdbSearchResults())
      

      }
      const handleLanguageChange =(e)=>{
        dispatch(changeLanguage(e.target.value))
      }
        
  return (
    <div className='flex justify-between items-center px-6  absolute top-0 left-0 w-screen z-2 bg-gradient-to-b from-black'>
    <div className=' px-8 py-2 text-4xl'>
    <img className='w-44' src={LOGO_URL} alt='background image'/>
  </div>
  {user && 
  <div className='mr-6 my-6 flex p-2'>
    {showGPTSearch && <select className='text-white bg-gray-900 px-4 py-2 border-white hover:cursor-pointer ml-6 rounded-xl' onChange={handleLanguageChange}>
    {SUPPORTING_LANGUAGES.map((lan) => <option key={lan.searchIdentifier} value={lan.searchIdentifier}>{lan.searchLanguage} </option>)}
    </select>}
    <button type="button" className='px-4 ml-6 py-2 bg-purple-800 rounded-xl text-white hover: cursor-pointer' onClick={handleGPTSearchClick}>{showGPTSearch ? "Home" : "GPT Search"}</button>
  <img className='w-10 h-10 rounded ml-6' src={SignOut_Image} alt="SignOut Image"/>
  <button  onClick={handleSignOut} className='text-white font-bold cursor-pointer'>(SignOut)</button>
  </div>}
  </div>
  )
}

export default Header