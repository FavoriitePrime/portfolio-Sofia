import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import { Portfolio } from "./Components/Pages/Portfolio/Portfolio";
import { Contacts } from "./Components/Pages/Contacts/Contacts";
import { Education } from "./Components/Pages/Education/Education";
import { Home } from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="Portfolio" element={<Portfolio/>} />
        <Route path="Education" element={<Education/>} />
        <Route path="Contacts" element={<Contacts/>} />
      </Routes>
    </>
  );
}

export default App;
