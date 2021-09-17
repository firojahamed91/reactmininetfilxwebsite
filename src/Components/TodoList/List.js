import React from 'react'
import './Todo_list_style.css'

const List = (props) => {
    // const deleteItems = () => {

    // }
    return (
        <>
            <div className="item_style">
                <i className="fas fa-times" aria-hidden="true" onClick={()=>{
                    return (props.onSelect(props.id))
                }}></i>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default List
