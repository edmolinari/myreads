import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme';
import { BrowserRouter } from 'react-router-dom'
import App from '../App'
import { mockBooks, mockBook } from '../__fixtures__/fixtures'

import * as BooksAPI from '../BooksAPI'

/**
  * Mocking API requests
  */
jest.mock('../BooksAPI', () => {
  return {
    getAll: jest.fn(() => Promise.resolve(mockBooks)),
    update: jest.fn(() => Promise.resolve(mockBook)),
    search: jest.fn(() => Promise.resolve(mockBook)),
  };
});


it('renders within a BrowserRouter context', () => {
  const div = document.createElement('div')
  ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, div)
})

describe('App restAPI calls', () => {
  const app = shallow(<App />);

  it('gets list of Books on DidMount stage of lifecycle and stores on state', async () => {
    await app.instance().componentDidMount();
    expect(app.state().books.length).toEqual(5)
  })

  it('lists books', () => {
    app.instance().listBooks();
    expect(BooksAPI.getAll).toHaveBeenCalled();
  })

  it('moves a book between shelves', () => {
    app.instance().moveBook();
    expect(BooksAPI.update).toHaveBeenCalled();
  })

  it('searches for books', () => {
    const query = 'linux'
    app.instance().searchBooks(query);
    expect(BooksAPI.search).toHaveBeenCalledWith(query);
  })

})
