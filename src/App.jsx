import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Form } from "./components/Form";
import { List } from "./components/List";

function App() {
  return (
    <main>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Form />} />
          <Route path="/list" element={<List />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}

export default App;
