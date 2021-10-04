import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Button as ButtonMD, CircularProgress} from '@material-ui/core';

import {useStyles} from './styles';

const Button = ({
  loading,
  disabled,
  backgroundColor,
  color,
  className,
  children,
  ...rest
}) => {
  const classes = useStyles({
    backgroundColor,
    color,
  });
  return (
    <div className={classes.root}>
      <ButtonMD
        variant="contained"
        disabled={loading || disabled}
        className={clsx(classes.button, className)}
        {...rest}>
        {children}
      </ButtonMD>
      {loading && <CircularProgress size={24} className={classes.loading} />}
    </div>
  );
};

Button.propTypes = {
  loading: PropTypes.bool,
  disabled: PropTypes.bool,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.string])
    .isRequired,
};

Button.defaultProps = {
  loading: false,
  disabled: false,
  backgroundColor: '#1692D8',
  color: '#fff',
  className: '',
};

export default Button;
