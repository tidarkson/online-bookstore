import React from 'react'
import Card from './Cards'
import { useState } from 'react';
import axios from 'axios'

export default function Main () {
    const [search, setSearch] = useState("");
    const [bookData, setbookData] = useState([]);

    function searchBook (evt) {
        if(evt.key==="Enter"){
            axios.get('https://www.googleapis.com/books/v1/volumes?q='+search+'&key=AIzaSyDqW6NoXZXVMWkyLiEvsa0UddAkxJkbjmc&maxResults=40')
            .then(res => setbookData(res.data.items))
            .fetch(err=> console.log(err))
        }
    }
    return (
        <div className="main">
            <div className="header">
                <div className="logo">
                    <a href='#'><h5>Novelty <i class="fa fa-book" aria-hidden="true"></i><br/>Bookstore</h5></a>
                </div>
                <div className="row2">
                    <h2>Find your books here</h2>
                    <div className="search">
                        <input type="text" placeholder="Search..." value={search} onChange={e => setSearch(e.target.value)} onKeyPress={searchBook}></input>
                        <div className="icon"><i className="fa fa-search" aria-hidden="true"></i></div>
                    </div>
                </div>
                <div className="basket">
                <button>My Basket   <i class="fa fa-shopping-basket" aria-hidden="true"></i></button>
                </div>
            </div>
            <div className="container">
                {
                    <Card book={bookData}/>
                }

            </div>

        </div>

    )
}