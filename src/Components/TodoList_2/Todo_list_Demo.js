import React, {useState} from 'react'
import './Todo_list_Demo.css'
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import List from './List'

const Todo_list_Demo = () => {
    const [items, setItems] = useState('')
    const [itemList, setItemList] = useState([])
    const userInput= (event) => {
        setItems(event.target.value)
    }
    const addItems = () => {
        setItemList((oldItems)=>{
            return[...oldItems, items]
        })
        setItems('')
    }
    const deleteItems = (id) => {
        setItemList((oldItems)=>{
            return oldItems.filter((arrElem, index)=>{
                return (id !== index);
            })
        })
    }
    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <div className="headding"> 
                    <h1>Todo List</h1>
                    <input type="text" placeholder="Add Items" value={items} onChange={userInput}/>
                    <Button className="newBtn" onClick={addItems}>
                    <AddIcon/>
                    </Button>
                    </div>
                    <ol>
                    {itemList.map((itemValue, index)=>{
                        return (
                            <List
                            id={index}
                            key={index}
                            text={itemValue}
                            onSelect={deleteItems}
                            />
                            )
                    })} 
                    </ol>
                </div>
            </div>
        </>
    )
}

export default Todo_list_Demo
