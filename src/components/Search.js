import React from 'react'
import { Link } from 'react-router-dom'

const Search = ({searchResults}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <Link to='/' className="close-search">Close</Link>
        <div className="search-books-input-wrapper">

          <input type="text" name='query' placeholder="Search by title or author"/>

        </div>
      </div>
      <div className="search-books-results">
        <ol className="books-grid"></ol>
      </div>
    </div>
  )
}

export default Search
