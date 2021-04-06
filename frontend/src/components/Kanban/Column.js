import React, {useState, useEffect} from 'react'
import './kanban.css'


export default function Column({item, key}) {

    return (
        <div className={item.cName} key={key}>
            {item.title}
        </div>
    )
}
