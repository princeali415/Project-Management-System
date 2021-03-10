import React, {useState, useEffect} from 'react'
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import {axiosWithAuth} from '../utils/axiosWithAuth'
import {structuredProblemData} from '../utils/structureProblemData'
import LoadingOverlay from '../components/Loading/LoadingOverlay'
import './tickets.css'


const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.secondary.light,
      color: theme.palette.common.black,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);
  
  const StyledTableRow = withStyles((theme) => ({
    root: {
      '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    table: {
      minWidth: 700,
    minHeight: 500
    },
  });

function Tickets(props) {

    const [userInfo, setUserInfo] = useState([]);
    const classes = useStyles();


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

    return (
        <>
        
        <TableContainer component={Paper} id='table'>
      <Table className={classes.table} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell align="right">Description</StyledTableCell>
            <StyledTableCell align="right">Type</StyledTableCell>
            <StyledTableCell align="right">Status</StyledTableCell>
            <StyledTableCell align="right">Project Name</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            { rows ?

            rows.map((row) => (
            <StyledTableRow key={row.problemid}>
              <StyledTableCell component="th" scope="row">
                {row.problemname}
              </StyledTableCell>
              <StyledTableCell align="right">{row.problemdescription}</StyledTableCell>
              <StyledTableCell align="right">{row.problemtype.problemtype}</StyledTableCell>
              <StyledTableCell align="right">{row.status.status}</StyledTableCell>
              <StyledTableCell align="right">{row.project.projectname}</StyledTableCell>
            </StyledTableRow>
          ))
          : <LoadingOverlay id='loading'></LoadingOverlay>
            }
        </TableBody>
      </Table>
    </TableContainer>
    </>
    )
}

export default Tickets
