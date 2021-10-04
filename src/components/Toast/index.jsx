import React from 'react';
import PropTypes from 'prop-types';
import {Snackbar} from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';

const Toast = ({
  message,
  type,
  open,
  autoHideDuration,
  handleClose,
  ...rest
}) => {
  return (
    <Snackbar
      anchorOrigin={{vertical: 'top', horizontal: 'right'}}
      open={open}
      autoHideDuration={autoHideDuration}
      onClose={handleClose}
      {...rest}>
      <MuiAlert
        onClose={handleClose}
        severity={type}
        elevation={6}
        variant="filled">
        {message}
      </MuiAlert>
    </Snackbar>
  );
};

Toast.propTypes = {
  message: PropTypes.string.isRequired,
  type: PropTypes.string,
  open: PropTypes.bool.isRequired,
  autoHideDuration: PropTypes.number,
  handleClose: PropTypes.func.isRequired,
};

Toast.defaultProps = {
  type: 'success',
  autoHideDuration: 4000,
};

export default Toast;
