import SideBar from "./sidebar";
import "../styles/booklist.css";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const BookList = (props) => {
  let location = useLocation()
  let email = props.data;

  let [book, setBooks] = useState([]);
  useEffect(() => {
    let fetchData = async () => {
      let response = await fetch("http://localhost:2000/book");
      let resData = await response.json();
      setBooks(resData);
    };
    fetchData();
  }, []);
  let handleDelete =(id) =>{
    
    fetch(`http://localhost:2000/book/${id}` , {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(book)
    })
    window.location.reload() //reloads the page
  }
  let handleDeleteUser =(id)=>{
    setBooks(book.filter(item=>item.id !=id))
  }
  return (
    <div className="booklist">
      <div className="title">
        <h1>Book List</h1>
      </div>
      {book.map((data) => (
        <div className="list">
          <div className="list-item">
            <h1>
              {data.title}
            </h1>
            <p>{data.author}</p>
            <p>{data.language}</p>
            {location.pathname== '/admin-portal/book-list' && <button onClick={()=>handleDelete(data.id)}>Delete</button>}
            {location.pathname== '/user-portal/book-list' && <button onClick={()=>handleDeleteUser(data.id)}>Not Interested</button>}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookList;
