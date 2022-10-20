import '../../App.css';
import React, {useEffect, useState,} from "react";
import {Link, useNavigate} from "react-router-dom";


function Posts() {
    const [posts,setPosts]=useState([]);
    const navigate=useNavigate();
    const back=()=>navigate(-1);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=9')
            .then(response => response.json())
            .then(json => setPosts(json))
    },[])

    return (<div className={'container'}>
            <h1>Posts</h1>
            <button onClick={back}>Back</button>
            <div className={'wrap'}>
                {posts.map((item)=>{
                    return (<Link to={`/posts/${item.id}`} key={item.id} ><div className={'card'}>{item.title}</div></Link>)
                })}
            </div>
        </div>
    );
}
export default Posts;
