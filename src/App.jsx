import { Home } from "./pages/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Gallery } from "./pages/Gallery/Gallery";
import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import { Episodes } from "./pages/Episodes/Episodes";
import { Details } from "./pages/Details/Details";
import { CharacterDetails } from "./pages/CharacterDetails/CharacterDetails";

function App() {
  return (
    <BrowserRouter>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/Episodes" element={<Episodes />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path= '/CharacterDetails/:id' element={<CharacterDetails/>}/>
        </Routes>
      </>
    </BrowserRouter>
  );
}

export default App;
