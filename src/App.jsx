import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Home from './pages/Home.jsx';
import CreateBooks from './pages/CreateBook.jsx';
import EditBooks from './pages/EditBook.jsx';
import ShowBooks from './pages/ShowBook.jsx';
import DeleteBooks from './pages/DeleteBook.jsx';


function App() {
  

  return (
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/books/create' element={<CreateBooks/>} />
      <Route path='/books/details/:id' element={<ShowBooks/>} />
      <Route path='books/edit/:id' element={<EditBooks/>} />
      <Route path='books/delete/:id' element={<DeleteBooks/>} />
    </Routes>
  );
}; 

export default App
