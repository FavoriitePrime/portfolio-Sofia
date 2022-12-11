import { Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navigation/Navbar";
import { AboutMe } from "./Components/Pages/AboutMe/AboutMe";
import { Contacts } from "./Components/Pages/Contacts/Contacts";
import { Education } from "./Components/Pages/Education/Education";
import { Home } from "./Components/Pages/Home/Home";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="" element={<Home/>} />
        <Route path="AboutMe" element={<AboutMe/>} />
        <Route path="Education" element={<Education/>} />
        <Route path="Contacts" element={<Contacts/>} />
      </Routes>
    </>
  );
}

export default App;
