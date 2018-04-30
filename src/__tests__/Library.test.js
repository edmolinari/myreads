import React from 'react'
import { shallow } from 'enzyme';
import Library from '../components/Library'
import Shelf from '../components/Shelf'
import { mockBooks } from '../__fixtures__/fixtures'

describe('Library', () => {

  const minProps = { books: mockBooks }
  const libraryComponent = shallow(<Library {...minProps} />)

  it('renders properly', () => {
    expect(libraryComponent.length).toEqual(1)
  })

  it('contains title My Reads', () => {
    expect(libraryComponent.text()).toContain('MyReads')
  })

  it('has list of books content section', () =>{
    expect(libraryComponent.find('.list-books-content').length).toEqual(1)
  })

  it('contains 3 shelves', () => {
    expect(libraryComponent.find(Shelf).length).toEqual(3)
  })

  it('contains Currently Reading shelf', () => {
    expect(libraryComponent.find('Shelf[type="currentlyReading"]').length).toEqual(1)
  })

  it('contains Want to Read shelf', () => {
    expect(libraryComponent.find('Shelf[type="read"]').length).toEqual(1)
  })

  it('contains Read shelf', () => {
    expect(libraryComponent.find('Shelf[type="wantToRead"]').length).toEqual(1)
  })

  it('has search feature', () => {
    expect(libraryComponent.find('Link[to="/search"]').length).toEqual(1)
  })

})
