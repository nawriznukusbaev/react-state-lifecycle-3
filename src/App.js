import './App.css';
import reportWebVitals from './reportWebVitals';
import React, {useEffect} from 'react';
import {Route, Routes, Link,} from "react-router-dom";
import CardHome from "./components/card-home";
import Posts from "./components/posts";
import Post from "./components/post";
import Comments from "./components/comments";
import Comment from "./components/comment";


function App() {

    return (

            <Routes>
                <Route path="/" element={<CardHome/>}/>
                <Route path="/posts" element={<Posts/>}/>
                <Route path="/posts/:id" element={<Post/>}/>
                <Route path="/comments" element={<Comments/>}/>
                <Route path="/comments/:id" element={<Comment/>}/>

            </Routes>


    );
}
export default App;
