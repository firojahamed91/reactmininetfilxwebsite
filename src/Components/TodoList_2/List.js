import React from 'react'
import './Todo_list_Demo.css'
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

const List = (props) => {
    const deleteItems = () => {}
    return (
        <>
            <div className="item_style">
                <DeleteForeverIcon className="dIcon" onClick={()=>{
                    props.onSelect(props.id)
                }}/>
                <li>{props.text}</li>
            </div>
        </>
    )
}

export default List
