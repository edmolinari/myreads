import React from 'react'
import Shelf from './Shelf'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Library = ({books, onMoveBook}) => (
  <div className="list-books">
    <div className="list-books-title">
      <h1>MyReads</h1>
    </div>
    <div className="list-books-content">
      <div>
        <Shelf type='currentlyReading' books={books} onMoveBook={onMoveBook} />
        <Shelf type='read' books={books} onMoveBook={onMoveBook} />
        <Shelf type='wantToRead' books={books} onMoveBook={onMoveBook} />
      </div>
    </div>
    <div className="open-search">
      <Link to='/search' >Add a book</Link>
    </div>
  </div>
)

Library.propTypes = {
  books: PropTypes.array.isRequired,
  onMoveBook: PropTypes.func.isRequired
}

export default Library
