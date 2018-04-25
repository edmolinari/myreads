import React from 'react'
import { shallow } from 'enzyme';
import Library from '../components/Library'

describe('Library', () => {
  const books = [
    {id: 1, title:"The Linux Command Line",authors:["William E. Shotts, Jr."],publisher:"No Starch Press"},
    {id: 2, title:"Learning Web Development with React and Bootstrap",authors:["Harmeet Singh","Mehul Bhatt"]},
    {id: 3, title:"The Cuckoo's Calling",authors:["Robert Galbraith"],publisher:"Mulholland Books"},
    {id: 4,title:"Lords of Finance",authors:["Liaquat Ahamed"],publisher:"Penguin"},
    {id: 5,title:"Needful Things",authors:["Stephen King"],publisher:"Simon and Schuster"}
  ]
  const minProps = { books: books }
  const libraryComponent = shallow(<Library {...minProps} />)

  it('renders properly', () => {
    expect(libraryComponent.length).toEqual(1)
  })

  it('contains title My Reads', () => {
    expect(libraryComponent.text()).toContain('MyReads')
  })

  it('contains 3 shelves', () => {
    expect(libraryComponent.find('.bookshelf').length).toEqual(3)
  })

  it('contains Currently Reading shelf', () => {
    expect(libraryComponent.text()).toContain('Currently Reading')
  })

  it('contains Want to Read shelf', () => {
    expect(libraryComponent.text()).toContain('Want to Read')
  })

  it('contains Read shelf', () => {
    expect(libraryComponent.text()).toContain('Read')
  })
})
