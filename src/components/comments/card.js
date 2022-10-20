import '../../App.css';
import React, {useEffect, useState,} from "react";
import {Link, useNavigate} from "react-router-dom";


function Comments() {
    const [comments,setComments]=useState([]);
    const navigate=useNavigate();
    const back=()=>navigate(-1);
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/comments?_start=0&_limit=9')
            .then(response => response.json())
            .then(json => setComments(json))
    },[])

    return (<div className={'container'}>
            <h1>Comments</h1>
            <button onClick={back}>Back</button>
            <div className={'wrap'}>
                {comments.map((item)=>{
                    return (<Link to={`/comments/${item.id}`} key={item.id} ><div className={'card'}>{item.name}</div></Link>)
                })}
            </div>
        </div>
    );
}
export default Comments;
