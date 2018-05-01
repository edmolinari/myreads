import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'

const Library = ({books}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Shelf type='currentlyReading' books={books} />
        <Shelf type='read' books={books} />
        <Shelf type='wantToRead' books={books} />
      </div>
    </div>
    <div className="open-search">
      <Link to='/search' >Add a book</Link>
    </div>
  </div>
)

export default Library
