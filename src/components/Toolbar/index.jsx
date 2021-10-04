import React from 'react';
import PropTypes from 'prop-types';

import Button from '../Button';

import {useStyles} from './styles';

const Toolbar = ({title, actionButtonLabel, handleActionButton}) => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1>{title}</h1>
      {actionButtonLabel && (
        <Button onClick={() => handleActionButton()}>
          {actionButtonLabel}
        </Button>
      )}
    </div>
  );
};

Toolbar.propTypes = {
  title: PropTypes.string.isRequired,
  actionButtonLabel: PropTypes.string,
  handleActionButton: PropTypes.func,
};

Toolbar.defaultProps = {
  actionButtonLabel: '',
  handleActionButton: () => {},
};

export default Toolbar;
