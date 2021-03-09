import React from 'react'
import {useHistory} from 'react-router-dom'
import Button from '@material-ui/core/Button';
import { Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import '../App.css'


const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      },
    },
  }));
  

export default function Logout() {
    
    const classes = useStyles();
    const history = useHistory();

    const goHome = () => {
        history.push("/")
    }

    return (
        <div>
        <div className={classes.root} id="logout">
            <Typography align='center'>Great work today, enjoy the rest of your day!</Typography>
            <div>
            <Button variant="contained" color="secondary" onClick={goHome} size='large' id='login'>Login</Button>
            </div>
        </div>
        </div>
    )
}
