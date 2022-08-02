import React from 'react'
import { useState } from 'react';
import Modal from './Modal';

export default function Card({ book }) {
    console.log(book)
    const [show, setShow] = useState(false)
    const [bookItem, setBookItem] = useState()
    return (
        <>
            {
                book.map((item) => {
                    let thumbnail = item.volumeInfo.imageLinks && item.volumeInfo.imageLinks.smallThumbnail;
                    let amount = item.saleInfo.saleability
                    let title = item.volumeInfo.title
                    if (thumbnail !== undefined && amount !== undefined) {
                        return (
                            <>
                                <div className="card" onClick= {()=>{setShow(true); setBookItem(item)}}>
                                    <div className="card-body">
                                        <img src={thumbnail} alt="" />
                                        <div className="bottom">
                                            <h3 className='title'>{title}</h3>
                                            <p className="amount">${amount}</p>
                                        </div>
                                    </div>
                                </div>
                                <Modal show={show} item={bookItem} onClose={()=>setShow(false)}/>
                            </>

                        )
                    }

                })
            }
        </>
    )
}