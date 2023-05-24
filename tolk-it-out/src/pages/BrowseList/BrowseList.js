import React from 'react';
import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';

export default function BrowseList(props) {
  const [books, setBooks] = useState("");
  const [search, setSearch] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [error, setError] = useState("");

  
  useEffect(() => {
    fetch("https://openlibrary.org/search.json?author=tolkien")
    .then((response) => response.json())
    .then((books) => setBooks(books))
    .catch(setError);
  }, []);

  if(error) {
    return <h1>There has been an error, please try again.</h1>;
  }

  let bookList = books.docs;
  
  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return (
      <div className='bookList'>
        <Search />
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
  };
  return <section>{books ? loaded() : loading()}</section>;
}
