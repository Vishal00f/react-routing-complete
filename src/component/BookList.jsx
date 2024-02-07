import React from 'react'
import { Link, Outlet, useSearchParams } from 'react-router-dom'

function BookList() {
  const [searchParams,setSearchParams]=useSearchParams({n:3});
  const number=searchParams.get("n")
  const classname='hover:text-red-500'
  return (
    <>
    <Link to="/books/1" className='hover:duration-150 transition duration-150 ease-in-out hover:text-red-500'>Book 1</Link>
    <br/>
    <Link to="/books/2" className='mx-2 transition duration-150 ease-in-out hover:text-red-500'>Book 2</Link>
    <br/>
    <Link to="/books/new" className='transition duration-150 ease-in-out hover:text-red-500'>New Book</Link>
    <Link to={`books/${number}`} className='transition duration-150 ease-in-out hover:text-red-500'>Book {number}</Link>
    <input type='number' value={number} onChange={(event)=>setSearchParams({n:event.target.value})} />
    <h1>*****************************</h1>

    <Outlet/>
    </>
  )
}

export default BookList