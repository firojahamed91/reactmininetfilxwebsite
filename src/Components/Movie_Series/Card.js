import React from 'react'
import './Card.css'


const Cards_props = (props) => {
    return (
        <>
        <div className="cards">
        <div className="card m-5 style" style={{width: "12rem"}}>
            <img src={props.imgsrc} className="card-img-top card_img" alt="..."/>
            <div className="card_info">
                <h5 className="card_category"> {props.title} </h5>
                <p className=" card_title">{props.sname}</p>
                <a href={props.link} target="_blank" className="btn btn-primary"> Watch Now </a>
            </div>
        </div>
        </div>
        </>
    )
}

export default Cards_props
