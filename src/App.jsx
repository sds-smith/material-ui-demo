import { BrowserRouter, Routes, Route } from "react-router-dom";

import SearchAppBar from "./components/AppBar";
import Home from "./pages/Home";
import Tour from "./pages/Tour";

import './App.css'

const App = () =>  {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/:tourId' element={<Tour />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
