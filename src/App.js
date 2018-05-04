import React, { Component } from 'react'
import Library from './components/Library'
import Search from './components/Search'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import './App.css'

class BooksApp extends Component {
  state = {
    books: [],
    searchResults: []
  }

  componentDidMount = () => this.listBooks()


  /**
  * @description Get list of books
  * @returns updates state.books
  */
  listBooks = () => BooksAPI.getAll().then(books => { this.setState({books}) })

  /**
  * @description persists book shelf upadate and updates state
  * @param book <Object> containing at minimum an id attribute
  * @param shelf <String> contains one of ["wantToRead", "currentlyReading", "read"]
  * @returns calls listBooks to update state
  */
  moveBook = (book, shelf) => BooksAPI.update(book, shelf).then(book => this.listBooks())


  /**
  * @description search books
  * @param query <String> serach ctiteria for author or title
  * @returns state.searchResults
  */
  searchBooks = (query) =>
    BooksAPI.search(query)
      .then(searchResults => this.setState({ searchResults }))
      .catch(error => this.setState({ searchResults: [] }))


  render() {
    const { books, searchResults } = this.state
    return (
      <div className="app">
        <Route exact path='/' render={ () => (
            <Library
              books={[...books]}
              onMoveBook={this.moveBook}
            />
          )}
        />

        <Route  path='/search' render={ () => (
            <Search
              books={[...books]}
              searchResults={[...searchResults]}
              onMoveBook={this.moveBook}
              onSearch={this.searchBooks}
            />
          )}
        />
      </div>
    )
  }
}

export default BooksApp
