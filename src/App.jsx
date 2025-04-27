import ReactDOM from "react-dom/client";
import './index.css';
import Login from './components/Login';
import Browser from './components/Browser';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import appStore from "./utils/appStore";
import { Provider } from "react-redux";
import MoviePlayerPage from "./components/MoviePlayerPage";



export default function App() {
  

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
  },
  {
    path:"/browser/:id", 
    element:<MoviePlayerPage />
  }
  

]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <Provider store={appStore}>
    <App />
    <RouterProvider router={appRouter} />
  </Provider>
);
