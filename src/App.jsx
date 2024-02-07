import React from 'react'
import Header from './header/Header'
import { Link, Route, Routes } from 'react-router-dom'
import Home from "./component/Home";
import About from "./component/About";
import Contact from "./component/Contact";
import Book from './component/Book';
import NewBook from './component/NewBook';
import BookList from './component/BookList';
import NotFound from './component/NotFound';
function App() {
  return (
    <>
      <Header />
      <Link to='/books' className='text-xl block w-full'>Books</Link>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
      //nested route
        <Route path='/books' element={<BookList/>}>
            <Route path=':id' element={<Book />} />
            <Route path='new' element={<NewBook />} />
        </Route>
        <Route path='*' element={<NotFound/>} />
      </Routes>
    </>
  )
}

export default App
