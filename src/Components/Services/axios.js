import axios from "axios"
import {useEffect} from 'react'
const url = 'https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=Pg4mzg0kWJInVRAdus7BIxEIIcaK3jRD';

const FetchUrl = () => {

    

    useEffect(() => {
      
    const fetchBooks = async () => {
        const res = await axios.get(url) 
        console.log(res.data.results.books[0])
    }
      
      fetchBooks()
    }, [])
    
    
  return (
    <div>axios</div>
  )
}

export default FetchUrl