import React from 'react';
import { useState, useEffect } from 'react';
import Search from '../../components/Search/Search';
import { Link } from 'react-router-dom';

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

  const handleSearch = (search) => {
    setSearch(search);
    if(search !== ""){
      const results = bookList.filter((book) => {
        return Object.values(book)
        .join(" ")
        .toLowerCase()
        .includes(search.toLowerCase())
      });
      setSearchResults(results);
      console.log(searchResults)
    } else {
      setSearchResults(bookList);
    }
  };

  const loading = () => {
    return <h1>Loading...</h1>
  }

  const loaded = () => {
    return (
      <div className='bookList'>
        <Search term={search} searchKeyword={handleSearch}/>
        {search.length < 1 ?
        <ul className='bookList'>
          {bookList.map((item, i) => {
            return (
              <li key = {i} className='bookList-item'>
              <i className='icon'></i>
              &nbsp;
              <Link to={`/book/${item.title}`} state={{item:item}}>
                {item.title}
              </Link> 
              </li>
            );
          })}
        </ul>
        :
        <ul className='bookList'>
          {searchResults.map((item, i) => {
            return (
              <li key = {i} className='bookList-item'>
              <i className='icon'></i>
              &nbsp;
              {item.title}
              </li>
            );
          })}
        </ul>
        }
      </div>
    )
  };
  return <section>{books ? loaded() : loading()}</section>;
}
