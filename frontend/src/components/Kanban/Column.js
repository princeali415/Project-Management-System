import React, {useState, useEffect} from 'react'
import './kanban.css'


export default function Column({item}) {

    return (
        <div className={item.cName}>
            {item.title}
        </div>
    )
}
