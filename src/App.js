import React, { Component } from 'react'
import Library from './components/Library'
import Search from './components/Search'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: [],
    showSearchPage: false
  }

  componentDidMount() {
    // set state with list of books pulled from external restAPI
    BooksAPI.getAll().then(books => { this.setState({books}) })
  }

/**
* @description persists book shelf upadate and updates state
* @param book <Object> containing at minimum an id attribute
* @param shelf <String> contains one of ["wantToRead", "currentlyReading", "read"]
* @returns updated state.books
*/
  moveBook = (book, shelf) => {
    BooksAPI.update(book, shelf).then(book => {
      this.setState(state => ({
        books: state.books
          .filter(_book => _book.id !== book.id)
          .concat([book])
        })
      )}
    )
  }

/**
* @description search books
* @param book <Object> containing at minimum an id attribute
* @param shelf <String> contains one of ["wantToRead", "currentlyReading", "read"]
* @returns state.searchResults
*/
  searchBooks = (query) => {
    BooksAPI.search(query).then(searchResults => this.setState({searchResults}) )
  }


  render() {
    const { books, searchResults, showSearchPage } = this.state
    return (
      <div className="app">
        {showSearchPage ? (
          <Search searchResults={searchResults} />
        ) : (
          <Library books={books} />
        )}
      </div>
    )
  }
}

export default BooksApp
