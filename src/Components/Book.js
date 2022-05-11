import React, {useState, useEffect} from 'react'
import * as BookAPI from '../Components/Services/BooksAPI'

// const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Pg4mzg0kWJInVRAdus7BIxEIIcaK3jRD';


const Book = () => {
 
  
  const [allBooks, setBooks] = useState([])
  
    useEffect(() => {
       BookAPI.getAll().then((books) =>{
        setBooks(books)
        
      })
      
    }
    , [])
    
    const booksMaps = allBooks.map((book) => {
      console.log(book);
          return <div key={book.id}>
            <article >
              <div style={{
              width: 128,
              height: 193,
            }}>
                <img alt='bookCover' src={book.imageLinks.smallThumbnail} /> 
              </div>
              <h3>{book.title}</h3>
              <h5>{book.description}</h5>
              <h4>{book.authors}</h4>
              <h4>{book.shelf}</h4>
            </article>
        </div>}
      )
    
      return ( <ul>{booksMaps}</ul>)
  

  
}

export default Book;