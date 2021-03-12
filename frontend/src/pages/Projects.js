import React, {useState, useEffect} from 'react'
import ProjectTable from '../components/ProjectTable/ProjectTable'
import {axiosWithAuth} from '../utils/axiosWithAuth'

function Projects() {
    const [userData, setUserData] = useState([])
    const [problems, setProblems] = useState([])

    useEffect(() => {               // create an endpoint to get list of projects by userId or by current user
        axiosWithAuth()             
        .get("/users/getuserinfo")
        .then(res => {
            setUserData(res.data)
            setProblems(res.data.problems)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

    
    return (
        <div className='project-card-ctn'>
            <ProjectTable />
        </div>
    )
}

export default Projects
