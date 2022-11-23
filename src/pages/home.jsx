import React ,{useEffect,useState}from 'react'
import SelectedBook from '../components/SelectedBook'
import ShelfBook from '../components/ShelfBook'
import * as BooksAPI from '../BooksAPI'
import Book from '../components/Book'
import { useNavigate } from 'react-router-dom'

function Home() {
    const [data,setData]=useState([]);
    const navigate = useNavigate();
    useEffect(()=>{BooksAPI.getAll().then((data) => setData(data))},[])
    console.log(data);

    
  const handleChange = (book,e) => {
    BooksAPI.update(book, e.target.value).then((res) => {
      book.shelf = e.target.value;
      updateBooks();
    });
  }
  const updateBooks = () => {
    BooksAPI.getAll().then((books) => {
      setData(books);
    });
  };
  return (
    
    <div className="list-books">

    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>

<ShelfBook title={"Read"}/>
{data.length>0 ?
        (data .filter((book) => book.shelf === "read")
        .map((book)=>
             (
<div className="bookshelf-books">
                     <ol class="books-grid">
                    <li key={book.id}>
                        <Book title={book.title} UrlImage={`url(${book.imageLinks.thumbnail}}` }author={book.authors} width={128} height={188} book={book} handleChange={handleChange}/>
                </li>
                </ol>
                </div>)
              ))
              :
              (<div>loading......</div>)
              
                          
}

<ShelfBook title={"Currently Reading"}/>
{data.length>0 ?
        (data .filter((book) => book.shelf === "currentlyReading")
        .map((book)=>
             (
<div className="bookshelf-books">
                     <ol className="books-grid">
                    <li key={book.id}>
                        <Book title={book.title} UrlImage={`url(${book.imageLinks.thumbnail}}` }author={book.authors} width={128} height={188} book={book} handleChange={handleChange}/>
                </li>
                </ol>
                </div>)
              ))
              :
              (<div>loading......</div>)
              
                          
}

<ShelfBook title={"Want to Read"}/>
{data.length>0 ?
        (data .filter((book) => book.shelf === "wantToRead")
        .map((book)=>
             (
<div className="bookshelf-books">
                     <ol class="books-grid">
                    <li key={book.id}>
                        <Book title={book.title} UrlImage={`url(${book.imageLinks.thumbnail}}` }author={book.authors} width={128} height={188} book={book} handleChange={handleChange}/>
                </li>
                </ol>
                </div>)
              ))
              :
              (<div>loading......</div>)
              
                          
}
      </div>
    </div>
    <div className="open-search">
      <a onClick={() => navigate('/search')} style={{cursor:'pointer'}}>Add a book</a>
      
    </div>
  </div>
  )
}

export default Home