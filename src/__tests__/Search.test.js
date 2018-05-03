import React from 'react'
import { shallow, mount } from 'enzyme';
import { BrowserRouter, Route } from 'react-router-dom'
import Search from '../components/Search'
import { mockBooks, onMoveBookMock, onSearchMock } from '../__fixtures__/fixtures'

describe('Search', () => {
  const minProps = { searchResults: mockBooks,
    books: [],
    onMoveBook: onMoveBookMock,
    onSearch:  onSearchMock
  }
  const searchComponent = shallow(<Search {...minProps} />)

  it('renders properly', () => {
    expect(searchComponent.length).toEqual(1)
  })

  it('has input text for search queries', () => {
    expect(searchComponent.find('input').props().name).toEqual('query')
  })

  it('has search books results section', () => {
    expect(searchComponent.find('.search-books-results').length).toEqual(1)
  })

  describe('search action', () => {
    const query = 'testQuery'
    const onSearchSpy = jasmine.createSpy('onSearch')
    const searchComponent = shallow(<Search searchResults={mockBooks} books={[]} onMoveBook={onMoveBookMock} onSearch={onSearchSpy} />)

    it('calls onSearch action', () => {
      searchComponent.find('input').simulate('change',{target: {value: query}})
      expect(onSearchSpy).toHaveBeenCalledWith(query)
    })
  })

})
