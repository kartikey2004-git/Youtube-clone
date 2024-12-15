import Navbar from "./Components/Navbar";
import SideBar from "./Components/SideBar";
import { useAuth } from "./context/AuthProvider";

function App() {

  const {loading,data} = useAuth()
  console.log(loading);
  console.log(data);

  return ( 
  <div>
    <Navbar/>
    <SideBar/>
  </div>
  )
}

export default App;
