import React, { useState, useEffect } from "react";
import SearchIcon from "@material-ui/icons/Search";
import MaterialTable from "material-table";
import {axiosWithAuth} from '../../utils/axiosWithAuth'

export default function TicketTable(props) {
    const [rows, setRows] = useState([])
    const [columns, setCoulumnsData] = useState([
      {
        title: "Problem Name",
        field: "problemname",
      },
      { 
          title: "Problem Description", 
          field: "problemdescription" 
      },
      { 
          title: "Status", 
          field: "status.status", 
      },
      { 
          title: "Project", 
          field: "project.projectname", 
      }
    ])

    useEffect(() => {
        axiosWithAuth()
        .get("/users/getuserinfo")
        .then(res => {
            setRows(res.data.problems)
            localStorage.setItem("userinfo", JSON.stringify(res.data))
        })
        .catch(err => {
            console.log(err)
        })
    },[])
  
  return (
    <MaterialTable
      style={{ marginTop: 65 }}
      columns={columns}
      data={rows}
      title="Tickets"
      icons={{
         Search: () => <SearchIcon />,
       }}
    />
  );
};
