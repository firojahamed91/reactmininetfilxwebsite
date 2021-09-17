import React from 'react'
import Card from './Card'
import Data from './Data_list'

const Cards = () => {
    return (
        <>
        <div>
            <h1 className="heading_style">Movie Series</h1>
            {Data.map((value)=>{
                return(
                    <Card
                        imgsrc={value.imgsrc}
                        sname= {value.sname}
                        title= {value.title}
                        link= {value.link}
                    />
                )
            })}
        </div>
        </> 
    )
}

export default Cards
