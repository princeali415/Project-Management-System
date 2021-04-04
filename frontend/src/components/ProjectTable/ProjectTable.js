import React, {useEffect, useState} from 'react'
import {axiosWithAuth} from '../../utils/axiosWithAuth'
import SearchIcon from "@material-ui/icons/Search";
import MaterialTable from "material-table";

function ProjectTable(props) {

    const [projects, setProjects] = useState([])
    const currentUser = JSON.parse(localStorage.getItem("userinfo"))
    const [columns, setCoulumnsData] = useState([
        {
          title: "Project Name",
          field: "projectname",
        },
        { 
            title: "Project Description", 
            field: "projectdescription" 
        },
      ])

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

    return (
        <MaterialTable
        style={{ marginTop: 65}}
        columns={columns}
        data={projects}
        title="Tickets"
        icons={{
            Search: () => <SearchIcon />,
        }}
        />
    )
}

export default ProjectTable
