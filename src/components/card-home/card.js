import '../../App.css';
import {Link, Route, Routes} from "react-router-dom";
import Posts from "../posts";
import React from "react";

function CardHome() {
    return (<>
        <div className={'container'}>
            <h1>Posts and comments</h1>

            <Link to={'/posts'}>
                <div className={'card'}>
                    Posts
                </div>
            </Link>
            <Link to={'/comments'}>
                <div className={'card'}>
                    Comments
                </div>
            </Link>
        </div>
    </>);
}

export default CardHome;
