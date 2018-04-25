import React from 'react'
import { shallow } from 'enzyme';
import Search from '../components/Search'

describe('Search', () => {
  const books = [
    {id: 1, title:"The Linux Command Line",authors:["William E. Shotts, Jr."],publisher:"No Starch Press"},
    {id: 2, title:"Learning Web Development with React and Bootstrap",authors:["Harmeet Singh","Mehul Bhatt"]},
    {id: 3, title:"The Cuckoo's Calling",authors:["Robert Galbraith"],publisher:"Mulholland Books"},
    {id: 4,title:"Lords of Finance",authors:["Liaquat Ahamed"],publisher:"Penguin"},
    {id: 5,title:"Needful Things",authors:["Stephen King"],publisher:"Simon and Schuster"}
  ]
  const minProps = { searchResults: books }
  const searchComponent = shallow(<Search {...minProps} />)

  it('renders properly', () => {
    expect(searchComponent.length).toEqual(1)
  })

  it('has input text for search queries', () => {
    const expectedProps = {
      type: 'text',
      name: 'query',
      placeholder: 'Search by title or author' }
    expect(searchComponent.find('input').props()).toEqual(expectedProps)
  })

  it('has search books results section', () => {
    expect(searchComponent.find('.search-books-results').length).toEqual(1)
  })

})
