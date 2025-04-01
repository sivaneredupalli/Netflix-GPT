
#Netflix-GPT
 - create react app
 - configure tailwind css

 #Features
  - Login/Signin
        -Sign In/Sign Up Form
        -redirect to Browser Page
  - Browser (after authentication)
    -Header
    -Main Movie
        -Trailer in Background
        -Title & Description
        -MovieSuggestion
            -MovieLists * N

  -NetflixGPT
    -Search Bar
    -Movie Suggestions



    import ReactDOM from "react-dom/client";
import './index.css'
import Login from './components/Login'
import Browser from './components/Browser'
import { createBrowserRouter, RouterProvider} from 'react-router'
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";
export default function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
         const {uid,email,displayName} = user;
         dispatch(addUser({uid:uid,email:email,displayName:displayName}))
      } else {
        // User is signed out
        dispatch(removeUser())
      }
    });
  },[])
  return (

      <Provider store={appStore}>
        <Login/>
        <Browser/>
      </Provider>
  )
}
const appRouter = createBrowserRouter([
  {
    path : '/',
    element: <Login/>
  },
  {
    path : '/browser',
    element: <Browser/>
  },
])
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);