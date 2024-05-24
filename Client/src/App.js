import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import WelcomePage from "./Pages/WelcomePage";
import BooksPage from "./Pages/BooksPage";
import SearchPage from "./Pages/SearchPage";
import FavouritePage from "./Pages/FavouritePage";
import ProfilePage from "./Pages/ProfilePage";
import { useDispatch } from "react-redux";
import { setX, setY, addBook } from "./action";
import axios from "axios";
import SingleBookPage from "./Pages/SingleBookPage";
import RequestForm from "./Pages/RequestForm";
import AdminPage from "./Pages/AdminPage";
import Footer from "./components/Footer/Footer.js";
import Error from "./Pages/Error.js";
import Blogs from "./Pages/Blogs/Blogs.js";
import Header from "./components/Header.jsx";



const App = () => {
  const dispatch = useDispatch();
  const getBooks = async () => {
    try {
      let allBooks = await axios.get(`${process.env.REACT_APP_API_URL}/books/`);
      dispatch(addBook(allBooks?.data));
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    if (window.innerWidth > 767) {
      dispatch(setX());
    } else {
      dispatch(setY());
    }
    getBooks();
    document.title = "BooKzZ.Com";
  }, []);

  return (
    <div className="App">
      <Header/>
      <Routes>
        <Route path="/" element={<WelcomePage />}></Route>
        <Route path="/books" element={<BooksPage />}></Route>
        <Route path="/search" element={<SearchPage />}></Route>
        <Route path="/favourite" element={<FavouritePage />}></Route>
        <Route path="/profile" element={<ProfilePage />}></Route>
        <Route path="/book/:id" element={<SingleBookPage />}></Route>
        <Route path="/book/request/:id" element={<RequestForm />}></Route>
        <Route path="/admin/dashboard" element={<AdminPage/>}></Route>
        <Route path="/Blogs" element={<Blogs/>}></Route>

        <Route path="*" element={<Error/>}></Route>
      
      </Routes>
      <div className="flex flex-wrap mx-2 my-3">
      <Footer/>
      </div>
      
    </div>
  );
};

export default App;
