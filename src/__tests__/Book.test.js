import React from 'react'
import Book from '../components/Book'
import { shallow } from 'enzyme'
import { mockBook } from '../__fixtures__/fixtures'

describe('Book', () => {
  const bookComponent = shallow(<Book book={mockBook} />)
  it('renders properly', () => {
    expect(bookComponent.length).toEqual(1)
  })

  describe('sections', () => {
    it('has a cover section', () => {
      expect(bookComponent.find('.book-cover').length).toEqual(1)
    })
    it('has title section', () => {
      expect(bookComponent.find('.book-title').length).toEqual(1)
    })
    it('has authors section', () => {
      expect(bookComponent.find('.book-authors').length).toEqual(1)
    })
  })

  describe('render content', () => {
    it('renders smallThumbnail', () => {
      expect(bookComponent.find('.book-cover').prop('style').backgroundImage).toContain(mockBook.imageLinks.smallThumbnail)
    })
    it('renders title', () => {
      expect(bookComponent.text()).toContain(mockBook.title)
    })
    it('renders authors', () => {
      expect(bookComponent.text()).toContain(mockBook.authors.join(', '))
    })
  })
})
