import React, { Component } from 'react'
import Library from './components/Library'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
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
    return (
      <div className="app">
        {this.state.showSearchPage ? (
          <div className="search-books">
            <div className="search-books-bar">
              <a className="close-search" onClick={() => this.setState({ showSearchPage: false })}>Close</a>
              <div className="search-books-input-wrapper">
                {/*
                  NOTES: The search from BooksAPI is limited to a particular set of search terms.
                  You can find these search terms here:
                  https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

                  However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
                  you don't find a specific author or title. Every search is limited by search terms.
                */}
                <input type="text" placeholder="Search by title or author"/>

              </div>
            </div>
            <div className="search-books-results">
              <ol className="books-grid"></ol>
            </div>
          </div>
        ) : (
          <Library books={this.state.books} />
        )}
      </div>
    )
  }
}

export default BooksApp
