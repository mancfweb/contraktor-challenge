import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
} from '@material-ui/core';
import Button from '../Button';

import {useStyles} from './styles';

const Modal = ({
  open,
  title,
  size,
  hasActions,
  handleClose,
  handleConfirm,
  confirmText,
  loading,
  className,
  children,
}) => {
  const classes = useStyles();
  return (
    <Dialog
      fullWidth
      maxWidth={size}
      open={open}
      onClose={handleClose}
      aria-labelledby="form-dialog-title"
      className={clsx(classes.root, className)}>
      {title && <DialogTitle id="form-dialog-title">{title}</DialogTitle>}
      <DialogContent>{children}</DialogContent>
      {hasActions && (
        <DialogActions>
          {!loading && (
            <Button onClick={handleClose} backgroundColor="#cad0dc">
              Cancelar
            </Button>
          )}
          <Button onClick={handleConfirm} loading={loading}>
            {confirmText}
          </Button>
        </DialogActions>
      )}
    </Dialog>
  );
};

Modal.propTypes = {
  loading: PropTypes.bool,
  hasActions: PropTypes.bool,
  open: PropTypes.bool.isRequired,
  handleClose: PropTypes.func,
  handleConfirm: PropTypes.func,
  title: PropTypes.string,
  confirmText: PropTypes.string,
  className: PropTypes.string,
  size: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.func, PropTypes.object]).isRequired,
};

Modal.defaultProps = {
  loading: false,
  hasActions: true,
  confirmText: 'Salvar',
  title: '',
  className: '',
  size: 'md',
  handleClose: () => {},
  handleConfirm: () => {},
};

export default Modal;
