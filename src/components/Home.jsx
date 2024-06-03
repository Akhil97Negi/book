import axios from "axios";
import { useState } from "react";
import BookList from "./BookCard";


const Home = () => {
    // const [books , setBooks] = useState([])
    // const token = JSON.parse(localStorage.getItem('token'));
    
    // const userId = JSON.parse(localStorage.getItem('userId')) || null;
    // const roles = JSON.parse(localStorage.getItem('roles'));
    
//     let url = `https://pdfgenerator-ig57.onrender.com/books/${userId}`;
//   if (roles === 'admin' || roles === 'users') {
//     url = `https://pdfgenerator-ig57.onrender.com/books/`;
//   }

    // console.log("home jsx : ", userId);
// const handleTaskRefresh = async()=>{
//        try {                            
//         const response = await axios.get( `https://pdfgenerator-ig57.onrender.com/books/`, {
//             headers: {
//               Authorization: `Bearer ${token}`
//             }
//           });
//           console.log(response.data.books);
//           setBooks(response.data.books);
//        } catch (error) {
//         console.log(error.message);
//        }
// }

  return (
    <div>
      <h2>Home Page</h2>
      {/* <button onClick={handleTaskRefresh}>Refresh Books</button> */}
      <BookList  />

    </div>
  );
};

export default Home;

// import axios from "axios";
// import { useState, useEffect } from "react";
// import BookList from "./BookCard";

// const Home = () => {
//   const [books, setBooks] = useState([]);
//   const token = JSON.parse(localStorage.getItem("token"));
//   const userId = JSON.parse(localStorage.getItem("userId")) || null;
//   const roles = JSON.parse(localStorage.getItem("roles"));

//   useEffect(() => {
//     const fetchBooks = async () => {
//       try {
//         let url = "https://pdfgenerator-ig57.onrender.com/books";
//         if (roles.includes("admin")) {
//           url += `/${userId}`;
//         }

//         const response = await axios.get(url, {
//           headers: {
//             Authorization: `Bearer ${token}`,
//           },
//         });
//         setBooks(response.data.books);
//       } catch (error) {
//         console.log("Error fetching books:", error.message);
//       }
//     };

//     fetchBooks();
//   }, [token, userId, roles]);

//   return (
//     <div>
//       <h2>Home Page</h2>
//       <BookList books={books} />
//     </div>
//   );
// };

// export default Home;

