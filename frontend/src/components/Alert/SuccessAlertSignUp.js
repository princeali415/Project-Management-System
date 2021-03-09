import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import Button from '@material-ui/core/Button';
import {useHistory} from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function SuccessAlertSignUp() {
  const classes = useStyles();
  const history = useHistory();

  return (
    <div className={classes.root}>
      <Alert severity="success" action={<Button color='secondary' size='large' onClick={() => history.push("/")}>LOGIN HERE!</Button>}>
        <AlertTitle>Success</AlertTitle>
        You have succesfully created an account — <strong>login!</strong>
      </Alert>
    </div>
  );
}