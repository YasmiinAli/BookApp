import { useState,useEffect } from "react";
import * as BooksAPI from "../BooksAPI";
import SelectedBook from '../components/SelectedBook'
import { useNavigate } from 'react-router-dom';

function Search() {
  const navigate = useNavigate();
  const [query,setQuery]=useState('');
  const [results, setResults] = useState([]);
  const [error, setError] = useState(true);

  const handleSelect = (book,e) => {
    BooksAPI.update(book, e.target.value).then((res) => {
      book.shelf = e.target.value;
      updateBookSearch();
    });
  }
  const updateBookSearch = () => {
    BooksAPI.getAll().then((books) => {
      setData(books);
    });
  };

  const [data,setData]=useState([])
  useEffect(()=>{BooksAPI.getAll().then((data) => setData(data))},[])
  
useEffect(() => {
  if (query) {
    setError(false);
    setResults([]);
    BooksAPI.search(query).then((books) => {
      if (books.length > 0) {
        updateBooks(books);
      } else {
        setError(true);
      }
    });
  } else {
    setError(false);
    setResults([]);
  }
}, [query]);

  const handleChange = (e) => {
    setQuery(e.target.value)
  }

  const updateBooks = (books) => {
  const currentBooks = books.map((book) => {
    book.shelf = "none";
    data.forEach((myBook) => {
      if (book.id === myBook.id) {
        book.shelf = myBook.shelf;
      }
    });
    if (!book.imageLinks) {
      book.imageLinks = {
        thumbnail:
          "https://cohenwoodworking.com/wp-content/uploads/2016/09/300x500.gif",
      };
    }
    return book;
  });
  setResults(currentBooks);
};
  return (
    <div className="search-books">
    <div className="search-books-bar">
      <a
        className="close-search"
        onClick={() => navigate('/')}
      >
        Close
      </a>
      <div className="search-books-input-wrapper">
        <input
          type="text"
          placeholder="Search by title, author, or ISBN"
          value={query}
          onChange={handleChange}
        />
      </div>
    </div>
    <div className="search-books-results">
      <ol className="books-grid">
            {!query && <li>To search for a new book, type in your keyword</li>}
     {!error &&
          results.map((book) => (
            <li key={book.id} className="books-grid">
              <div className="book">
                <div className="book-top">
                  <div
                    className="book-cover"
                    style={{
                      width: 128,
                      height: 193,
                      backgroundImage: `url(${book.imageLinks.thumbnail})`,
                    }}
                  ></div>
                        <SelectedBook book={book} handleChange={handleSelect} />

                </div>
                <div className="book-title">{book.title}</div>
                        <div className="book-authors">{book.author}</div>
              </div>
            </li>
            
          ))}
        {error && (
          <li>Not Found any book</li>
        )}
      </ol>

    </div>

  </div>
  )
}

export default Search







