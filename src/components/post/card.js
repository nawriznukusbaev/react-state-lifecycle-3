import '../../App.css';
import React, {useEffect, useState,} from "react";
import {Link, Route, Routes, useNavigate,useParams} from "react-router-dom";
import CardHome from "../card-home";
import card from "../card-home/card";
function Post() {
    const [post,setPost]=useState([]);
    const navigate=useNavigate();
    const back=()=>navigate(-1);
    let {id} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => response.json())
            .then(json => setPost(json))
    },[])

    return ( <div className={'container'}>
            <h1>Posts</h1>
            <button onClick={back}>Back</button>
                <h3>{post.title}</h3>
                <p>{post.body}</p>


        </div>
    );
}
export default Post;
