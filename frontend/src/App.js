import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
// import AddEntry from "./components/TimeEntries/AddEntry";
// import EntryList from "./components/TimeEntries/EntryList";
import HomePage from "./components/HomePage/HomePage";
import EntryPage from "./pages/entryPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/register" element={<Register/>} />
        {/* <Route path="/add-entry" element={<AddEntry/>} />
        <Route path="/entries" element={<EntryList/>} /> */}
        <Route path="/entry" element={<EntryPage/>} />
      </Routes>
    </Router>
  );
}

export default App;
