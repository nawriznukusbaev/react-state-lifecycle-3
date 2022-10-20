import '../../App.css';
import React, {useEffect, useState,} from "react";
import {Link, Route, Routes, useNavigate,useParams} from "react-router-dom";
import CardHome from "../card-home";
import card from "../card-home/card";
function Comment() {
    const [comment,setComment]=useState([]);
    const navigate=useNavigate();
    const back=()=>navigate(-1);
    let {id} = useParams();
    useEffect(()=>{
        fetch(`https://jsonplaceholder.typicode.com/comments/${id}`)
            .then(response => response.json())
            .then(json => setComment(json))
    },[])

    return ( <div className={'container'}>
            <h1>Comments</h1>
            <button onClick={back}>Back</button>
                <h3>{comment.name}</h3>
                <p>{comment.body}</p>


        </div>
    );
}
export default Comment;
