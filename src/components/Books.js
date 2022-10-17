import React, { useState } from 'react'
import booksMockData from '../mocks/books'
import BooksFilter from './BookFilter'
import BookList from './BookList'

const Books = (props) => {
  const [books, setBooks] = useState(booksMockData)
 

  return (
    <section id="books">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 text-center">
            <h2>Books</h2>
            <hr className="star-primary" />
          </div>
        </div>
        <BooksFilter setBooks={setBooks}/>
        <BookList books={books}/>
      </div>
    </section>
  )
}

export default Books
