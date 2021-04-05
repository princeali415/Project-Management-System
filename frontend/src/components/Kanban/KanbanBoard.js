import React, {useState, useEffect} from 'react'
import {columnData} from './columnData'
import Column from './Column'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import './kanban.css'

export default function KanbanBoard() {

    const [ticket, setTickets] = useState([])
    

    useEffect(() => {
        axiosWithAuth()
        .get('problems/problemsjoinedlist')
        .then(res => {
            setTickets(res.data.filter(item => item.assignedto === localStorage.getItem('username')))
            console.log(res.data.filter(item => item.assignedto === localStorage.getItem('username')))
        })
        .catch(err => {
            console.log(err)
        })
    }, [])


    return (
        <div className='kanban-board-ctn' style={{marginTop: 65, display:'flex'}}>
            
            {columnData.map((item) => {
                return <Column item={item} key={item.id} ticket={ticket} />
            })}
            
        </div>
    )
}
