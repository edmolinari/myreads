import React from 'react'
import Book from './Book'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

const Search = ({searchResults, onSearch, onMoveBook}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">

          <input
            type="text"
            name='query'
            placeholder="Search by title or author"
            onChange={(event) => event.target.value.length === 0 ? null : onSearch(event.target.value)}
          />

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid">
          { searchResults.length > 0 &&
            searchResults.map(book => (
              <li key={book.id}>
                <Book book={book} onMoveBook={onMoveBook} />
              </li>
            ))
          }
        </ol>
      </div>
    </div>
  )
}
Search.propTypes = {
  searchResults: PropTypes.array.isRequired,
  onSearch: PropTypes.func.isRequired,
  onMoveBook: PropTypes.func.isRequired
}

export default Search
