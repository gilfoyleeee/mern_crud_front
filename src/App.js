import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Create from "./components/Create";
import Read from "./components/Read";
import Update from "./components/Update";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Create />} />
          <Route exact path="/all" element={<Read />} />
          <Route path="/:id" element={<Update />} />
        </Routes>
      </BrowserRouter>
      {/* <NavBar /> */}
    </div>
  );
}

export default App;
