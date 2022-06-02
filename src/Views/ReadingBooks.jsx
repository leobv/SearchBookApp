import React, {useState, useEffect} from 'react'
import Book from '../Components/Book'
import * as BooksAPI from '../BooksAPI.js'

const ReadingBooks = () => {
  const [readings, setReadings] = useState([]) 
  useEffect(() => {
    //BooksAPI.getAll().then(books=>{
     //setReadings(books.filter((b) => b.shelf === 'currentlyReading')) 
     
    //}
    //)
   
			
    
  }, [])
  
  

  return (<div>
    <h1>ReadingBooks</h1>
    <Book />

    </div>
  )
}

export default ReadingBooks