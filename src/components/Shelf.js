import React, { Component } from 'react'
import propTypes from 'prop-types'
import Book from './Book'

class Shelf extends Component {

  static propTypes =  {
    type: propTypes.string.isRequired, //[read, currentlyReading, wantToRead]
    books: propTypes.array.isRequired
  }

  /**
  * @description define humazined shelf ttile bases on shelf type
  * @param type <String> shelf type ["wantToRead", "currentlyReading", "read"]
  * @returns shelf title
  */
  defineTitle = (type) => {
    let title = ''
    switch (type) {
      case 'read':
        title = 'Read'
        break;
      case 'currentlyReading':
        title = 'Currently Reading'
        break;
      case 'wantToRead':
        title = 'Want to Read'
        break;
      default:
        title = 'Currently Reading'
    }
    return title
  }

  /**
  * @description filter books that belong to shelf type
  * @param books <Array> list of books
  * @param type <String> shelf type ["wantToRead", "currentlyReading", "read"]
  * @returns shelf title
  */
  filteredBooks = (books, type) => books.filter(book => book.shelf === type)

  render() {
    const { books, type } = this.props
    return (
      <div className="bookshelf">
        <h2 className="bookshelf-title">{this.defineTitle(type)}</h2>
        <div className="bookshelf-books">
          <ol className="books-grid">
            {
              this.filteredBooks(books, type).map(book => {
                return (
                  <li key={book.id}>
                    <Book book={book} />
                  </li>
                )
              })
            }
          </ol>
        </div>
      </div>
    )
  }

}
export  default Shelf
