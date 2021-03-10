import React, { useState, useEffect } from "react";
import AddIcon from "@material-ui/icons/Add";
// import EditIcon from "@material-ui/icons/Edit";
// import DeleteIcon from "@material-ui/icons/Delete";
// import CheckIcon from "@material-ui/icons/Check";
// import SearchIcon from "@material-ui/icons/Search";
import { Input } from "@material-ui/core";
import MaterialTable from "material-table";
import {axiosWithAuth} from '../../utils/axiosWithAuth'


export default function TicketTable(props) {
    const [, setData] = useState([])
  const [userInfo, setUserInfo] = useState([]);
    // const classes = useStyles();


    useEffect(() => {
        axiosWithAuth()
        .get("/users/getuserinfo")
        .then(res => {
            setUserInfo(res.data)
        })
        .catch(err => {
            console.log(err)
        })
    },[])

    let rows = userInfo.problems
    console.log(rows)

  return (
    <MaterialTable
      style={{ marginTop: 65 }}
      columns={[
        {
          title: "Problem Name",
          field: "problemname",
          editComponent: editProps => (
            <Input
              autoFocus={true}
              onChange={e => editProps.onChange(e.target.value)}
            />
          )
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
      ]}
      data={rows}
      title="Tickets"
       icons={{
         Add: props => <AddIcon />,
    //     Edit: props => <EditIcon />,
    //     Delete: props => <DeleteIcon />,
    //     Clear: props => <DeleteIcon />,
    //     Check: props => <CheckIcon />,
    //     Search: props => <SearchIcon />,
       }}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              setData([...rows, newData]);

              resolve();
            }, 1000);
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...rows];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);

              resolve();
            }, 1000);
          }),
        
      }}
      
    />
  );
};
