import React from 'react';
import { useState, useEffect } from 'react';

export default function BrowseList(props) {
  const [books, setBooks] = useState("");
  const [error, setError] = useState("");

  
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?author=tolkien")
    .then((response) => response.json())
    .then((books) => setBooks(books))
    .catch(setError);
  }, []);

  if(error) {
    return <pre>{JSON.stringify(error, null, 2)}</pre>;
  }
  
  if(!books) {
    return null;
  }
  
  let bookList = books.docs;
  

  return (
    <div className='bookList'>
      <ul className='bookList'>
        {bookList.map((item, i) => {
          return (
          <li key = {i} className='bookList-item'>
            <i className='icon'></i>
            &nbsp;
            {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  )
}