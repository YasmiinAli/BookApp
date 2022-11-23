import React from 'react'
import SelectedBook from '../components/SelectedBook'

function Book({width,height,UrlImage,title,author,book,handleChange }) {
    
  return (
    <div className="book">
    <div className="book-top">
      <div
        className="book-cover"
        style={{
          width: width,
          height: height,
          backgroundImage:
            UrlImage,
        }}
      ></div>
<SelectedBook book={book} handleChange={handleChange}/>
    </div>
    <div className="book-title">{title}</div>
    <div className="book-authors">{author}</div>
  </div>
  )
}

export default Book