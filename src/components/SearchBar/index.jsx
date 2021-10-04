import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Paper, Input} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

import {useStyles} from './styles';

const SearchBar = ({onChange, className, ...rest}) => {
  const classes = useStyles();

  return (
    <Paper {...rest} className={clsx(classes.root, className)}>
      <SearchIcon className={classes.icon} />
      <Input
        {...rest}
        className={classes.input}
        disableUnderline
        onChange={onChange}
      />
    </Paper>
  );
};

SearchBar.propTypes = {
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string,
};

SearchBar.defaultProps = {
  className: '',
};

export default SearchBar;
