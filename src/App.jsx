import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignIn from './components/SignIn';
import FileUploader from './components/FileUploader';
import FileList from './components/FileList';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/fileuploader" element={<FileUploader />} />
        <Route path="/" element={<FileList />} />
      </Routes>
    </Router>
  );
}

export default App;
