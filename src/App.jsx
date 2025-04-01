import ReactDOM from "react-dom/client";
import './index.css';
import Login from './components/Login';
import Browser from './components/Browser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { Provider, useDispatch } from "react-redux";
import appStore from "./utils/appStore";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./utils/firebase";
import { useEffect } from "react";
import { addUser, removeUser } from "./utils/userSlice";

function App() {
  const dispatch = useDispatch();
  
  useEffect(() => {
   onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName } = user;
        dispatch(addUser({ uid, email, displayName }));
      } else {
        dispatch(removeUser());
      }
    });

    // return () => unsubscribe(); // Cleanup subscription
  }, []);

  return null; // No need to return UI from App
}

const appRouter = createBrowserRouter([
  {
    path: '/',
    element: <Login />
  },
  {
    path: '/browser',
    element: <Browser />
  }
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <App />
    <RouterProvider router={appRouter} />
  </Provider>
);
