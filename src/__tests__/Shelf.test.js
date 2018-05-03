import React from 'react'
import { shallow } from 'enzyme'
import Shelf from '../components/Shelf'
import Book from '../components/Book'
import { mockBooks, onMoveBookMock } from '../__fixtures__/fixtures'

const minProps = {
  type: 'read',
  books: mockBooks,
  onMoveBook: onMoveBookMock
}

describe('Shelf', () => {
  const shelfComponent = shallow(<Shelf {...minProps} />)

  it('renders properly', () => {
    expect(shelfComponent.length).toEqual(1)
  })
  it('has books section', () => {
    expect(shelfComponent.find('.bookshelf-books').length).toEqual(1);
  })
  it('list books', () => {
    expect(shelfComponent.find(Book).length).not.toEqual(0)
  })


  describe('shelf title', () => {
    it('renders Currently Reading', () => {
      const shelfComponent = shallow(<Shelf type='currentlyReading' books={minProps.books} onMoveBook={onMoveBookMock} />)
      expect(shelfComponent.text()).toContain('Currently Reading')
    })
    it('renders Want to Read', () => {
      const shelfComponent = shallow(<Shelf type='wantToRead' books={minProps.books} onMoveBook={onMoveBookMock}  />)
      expect(shelfComponent.text()).toContain('Want to Read')
    })
    it('renders Read', () => {
      const shelfComponent = shallow(<Shelf type='read' books={minProps.books} onMoveBook={onMoveBookMock}  />)
      expect(shelfComponent.text()).toContain('Read')
    })
  })

  describe('shelf listing books filtered by type', () => {
    it('filters by currentlyReading', () => {
      const shelfComponent = shallow(<Shelf type='currentlyReading' books={minProps.books} onMoveBook={onMoveBookMock}  />)
      expect(shelfComponent.find(Book).length).toEqual(2)
    })
    it('filters by wantToRead', () => {
      const shelfComponent = shallow(<Shelf type='wantToRead' books={minProps.books} onMoveBook={onMoveBookMock} />)
      expect(shelfComponent.find(Book).length).toEqual(1)
    })
    it('filters by read', () => {
      const shelfComponent = shallow(<Shelf type='read' books={minProps.books}  onMoveBook={onMoveBookMock} />)
      expect(shelfComponent.find(Book).length).toEqual(1)
    })
  })



})
