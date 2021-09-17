import React,{useState} from 'react'
import List from './List'
import './Todo_list_style.css'

const Todo_list = () => {
    const [items, setItems] = useState('')
    const [itemList, setItemList] = useState([])
    const userInput =(event)=>{
        setItems(event.target.value)
    }
    const addItems = ()=>{
        setItemList((oldItems)=>{
            return[...oldItems, items]
        })
        setItems('')
    }
    const deleteItems = (id) => {
        setItemList((oldItems)=>{
        return oldItems.filter((arrElem, index)=>{
            return (id !== index)
            console.log(id, index)
        })
        })
    }
    return (
        <>
            <div className="main_body">
                <div className="menu_card">
                    <div className="headding">
                        <p className="h1"> Item List </p>
                        <input className="input_fild"
                        type="text" 
                        placeholder="Add items"
                        value={items}
                        onChange={userInput}
                        />
                        <button className="button" type="submit"  onClick={addItems}> + </button>
                    </div>
                    <ol>
                        {itemList.map((itemValue, index)=>{
                            return (
                                <List
                                id = {index}
                                key = {index}
                                text = {itemValue}
                                onSelect = {deleteItems}
                                />
                            )
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo_list
