import React from 'react'
import Book from '../components/Book'
import { shallow, mount } from 'enzyme'
import { mockBook, onMoveBookMock } from '../__fixtures__/fixtures'

describe('Book', () => {
  const bookComponent = shallow(<Book book={mockBook} onMoveBook={onMoveBookMock} />)
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

  describe('move shelf action', () => {
    it('has book-shelf-changer section', () => {
      expect(bookComponent.find('.book-shelf-changer').length).toEqual(1)
    })

    describe('calling action with proper parms', () => {
      //jest.spyOn('onMoveBook') available only on jest 19
      const onMoveBookSpy = jasmine.createSpy('onMoveBook');
      const bookMounted = mount(<Book book={mockBook} onMoveBook={onMoveBookSpy} />)

      it('calls onMoveBook when selection targeting currentlyReading shelf', () => {
        bookMounted.find('select').simulate('change',{target: { value : 'currentlyReading'}});
        expect(onMoveBookSpy).toHaveBeenCalledWith(mockBook, 'currentlyReading');
      })
      it('calls onMoveBook when selection targeting read shelf', () => {
        bookMounted.find('select').simulate('change',{target: { value : 'read'}});
        expect(onMoveBookSpy).toHaveBeenCalledWith(mockBook, 'read');
      })
      it('calls onMoveBook when selection targeting wantToRead shelf', () => {
        bookMounted.find('select').simulate('change',{target: { value : 'wantToRead'}});
        expect(onMoveBookSpy).toHaveBeenCalledWith(mockBook, 'wantToRead');
      })
      it('calls onMoveBook when selection targeting none shelf', () => {
        bookMounted.find('select').simulate('change',{target: { value : 'none'}});
        expect(onMoveBookSpy).toHaveBeenCalledWith(mockBook, 'none');
      })
    })

  })
})
