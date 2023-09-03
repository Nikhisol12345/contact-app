
import { useLocation } from "react-router-dom";
import './App.css';
import SideBar from './Components/SideBar';
import AllRoutes from './Pages/AllRoutes';
import Logo from './utils/logo.png'; // Replace './logo.png' with the actual path to your image file

// import {Logo} from '../ScreenShots/logo.png';

function App() {

  const location = useLocation();
  const currentRoute = location.pathname;
 
  return (
    <div className="App">
      <div className="z-50 w-full fixed shadow-sm shadow-slate-700 top-0   bg-white font-bold p-10'"><img  src={Logo} className=" h-16 w-100 p-2" alt="logo" /></div>
      
     
      <div className='flex w-full '>
        <div className='sticky  top-0 h-screen'>
          <SideBar />
        </div>
        <div className='w-full'>
          <AllRoutes />
        </div>
      </div>
    </div>
  );
}

export default App;
