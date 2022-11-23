import React from 'react'
import Book from '../components/Book'

function ShelfBook({title}) {
  return (
    <div className="bookshelf">
    <h2 className="bookshelf-title">{title}</h2>

  </div>
  )
}

export default ShelfBook