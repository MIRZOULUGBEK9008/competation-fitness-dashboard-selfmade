import Teachers from "./components/Teachers/Teachers";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
function App() {
  return (
    <>
    <Routes>

      <Route path="/teachers"  element={<Teachers />}/>
      <Route path="/" element={<Dashboard/>}/>


    </Routes>
      
    </>
  );
}

export default App;
