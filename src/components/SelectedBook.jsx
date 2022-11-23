import React from 'react'

function SelectedBook({book,handleChange}) {
  return (
    <div className="book-shelf-changer">
    <select  value={book.shelf}
    onChange={(e)=>handleChange(book,e)}>
      <option value="none" disabled>
        Move to...
      </option>
      <option value="currentlyReading">
        Currently Reading
      </option>
      <option value="wantToRead">Want to Read</option>
      <option value="read">Read</option>
      <option value="none">None</option>
    </select>
  </div>
  )
}

export default SelectedBook