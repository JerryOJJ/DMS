import React from "react";
import { HashRouter, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignIn from "./components/SignIn";
import FileUploader from "./components/FileUploader";
import FileList from "./components/FileList";
import Menu from "./components/menu";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/fileuploader" element={<FileUploader />} />
        <Route path="/filelist" element={<FileList />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
