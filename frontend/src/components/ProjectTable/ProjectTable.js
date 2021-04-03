import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'

function ProjectTable(props) {

    const [projects, setProjects] = useState([])
    const currentUser = JSON.parse(localStorage.getItem("userinfo"))

    useEffect(() => {
        axiosWithAuth()
        .get("/projects/projects")
        .then( res => {
            setProjects(res.data.filter(item => item.createdBy === currentUser.username))
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    setTimeout(() => {
        console.log(projects)
    }, 3000)

    

    return (
        <>
        </>
    )
}

export default ProjectTable
