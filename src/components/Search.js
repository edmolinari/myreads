import React from 'react'

const Search = ({searchResults}) => {
  return (
    <div className="search-books">
      <div className="search-books-bar">
        <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
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
