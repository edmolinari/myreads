/**
  * Fixtures for books
  */


//sample list of books
export const mockBooks = [
  { id: 1,
    title: "The Linux Command Line",
    authors: ["William E. Shotts, Jr."],
    publisher: "No Starch Press",
    imageLinks: {
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    shelf: "currentlyReading"
  },
  { id: 2,
    title:"Learning Web Development with React and Bootstrap",
    authors:["Harmeet Singh","Mehul Bhatt"],
    imageLinks: {
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    shelf: "currentlyReading"
  },
  { id: 3,
    title:"The Cuckoo's Calling",
    authors:["Robert Galbraith"],
    imageLinks: {
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    publisher:"Mulholland Books",
    shelf: "read"
  },
  { id: 4,
    title:"Lords of Finance",
    authors:["Liaquat Ahamed"],
    imageLinks: {
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    publisher:"Penguin",
    shelf: "wantToRead"
  },
  { id: 5,
    title:"Needful Things",
    authors:["Stephen King"],
    imageLinks: {
      smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
      thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
    },
    publisher:"Simon and Schuster",
    shelf: "none"
  }
]

//sample book
export const mockBook = {
  title: "The Linux Command Line",
  authors:["William E. Shotts, Jr."],
  imageLinks: {
    smallThumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=5&source=gbs_api",
    thumbnail:"http://books.google.com/books/content?id=nggnmAEACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
  },
  publisher:"No Starch Press",
  shelf: "read"
}
