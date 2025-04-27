import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utils/firebase';
import { addUser, removeUser } from '../utils/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LOGO_URL, SUPPORTING_LANGUAGES } from '../utils/Constants';
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
    <div className="flex flex-col md:flex-row md:justify-between items-center px-6 py-2 w-full absolute top-0 left-0 z-10 bg-gradient-to-b from-black">
    {/* Logo */}
    <div className="mb-2 md:mb-0">
      <img className="w-32 md:w-44 mx-auto md:mx-0" src={LOGO_URL} alt="Netflix Logo" />
    </div>
  
    {/* User Controls */}
    {user && (
      <div className="flex flex-row items-center gap-5  hover:cursor-pointer">
        {/* Languages */}
        {showGPTSearch && (
          <select
            onChange={handleLanguageChange}
            className="bg-gray-900 text-white px-3 py-1 rounded-md"
          >
            {SUPPORTING_LANGUAGES.map((lan) => (
              <option key={lan.searchIdentifier} value={lan.searchIdentifier}>
                {lan.searchLanguage}
              </option>
            ))}
          </select>
        )}
  
        {/* GPT Search Toggle */}
        <button
          onClick={handleGPTSearchClick}
          className="bg-purple-800 text-white px-3 py-1 rounded-md hover:cursor-pointer"
        >
          {showGPTSearch ? "Home" : "GPT Search"}
        </button>
  
        {/* Sign Out Section */}
        <div className="flex items-center">
          <button
            onClick={handleSignOut}
            className="text-white bg-red-500 px-3 py-1 rounded-md hover:cursor-pointer"
          >
            Sign Out
          </button>
        </div>
      </div>
    )}
  </div>
  )
}

export default Header