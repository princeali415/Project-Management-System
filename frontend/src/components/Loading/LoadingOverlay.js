import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

const LoadingOverlay = () => {
  return (
    <div id='tickets'>
      <CircularProgress style={{width:'100px', height:'100px'}}/>
    </div>
  );
};

export default LoadingOverlay;