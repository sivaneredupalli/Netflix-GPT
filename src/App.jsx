import ReactDOM from "react-dom/client";
import './index.css'
import Login from './components/Login'
import Browser from './components/Browser'
import { createBrowserRouter, RouterProvider} from 'react-router'

export default function App() {
  

  return (

      <>
      <Login/>
      <Browser/>
      </>
    
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

 