import React, {useState, useEffect} from 'react'
import * as BookAPI from '../BooksAPI'
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';



 const Book = () => {
 
  
    const [allBooks, setAllBooks] = useState([])
    
    const currentReading = allBooks.filter((book) => book.shelf === 'currentlyReading')
    const wantToRead = allBooks.filter((book) => book.shelf === 'wantToRead')
    const read = allBooks.filter((book) => book.shelf === 'read')
    
    const getBooks = async () => await BookAPI.getAll().then((books) =>{
       setAllBooks(books)
    })

  
    const updateBook = async (book, shelf) => {
      await BookAPI.update(book, shelf)
      .then((book) => {
       book.shelf = shelf })}
    

    useEffect(() => {
      
      getBooks()
    }, [])

    // console.log(shelfChanger())
    // console.log(allBooks)
    // console.log(CurrentReading)
  
      return ( 
        <div>
          
        <ul>{allBooks.map((book) => (
         <Card key={book.id} sx={{ maxWidth: 200 }}>
            <CardMedia 
              alt='bookCover' 
              component="img"
              width="50"
              height="300"
              image={book.imageLinks.smallThumbnail} 
            /> 
            
            <CardContent>
              <h3>{book.title}</h3>
              {/* <h5>{book.description}</h5> */}
              <h4>{book.authors}</h4>
              <h4>{book.shelf}</h4>
              </CardContent>
            <div className="book-shelf-changer">
                  <select onChange={updateBook}>
                    <option value="move" disabled>
                      Move to...
                    </option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
                    <option value="Read">Read</option>
                    <option value="none">None</option>
                  </select>
                </div>
         </Card>
          
   ))} </ul>
   </div>
      )
  

  
} 
export default Book