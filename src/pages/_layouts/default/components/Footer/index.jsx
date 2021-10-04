import React from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Typography, Link} from '@material-ui/core';

import {useStyles} from './styles';

const Footer = ({className, ...rest}) => {
  const classes = useStyles();

  return (
    <div {...rest} className={clsx(classes.root, className)}>
      <Typography variant="body1">
        &copy;{' '}
        <Link component="a" href="https://contraktor.com.br/" target="_blank">
          Contraktor
        </Link>
        . 2020
      </Typography>
      <Typography variant="caption">Created by @mancfweb</Typography>
    </div>
  );
};

Footer.propTypes = {
  className: PropTypes.string,
};

Footer.defaultProps = {
  className: '',
};

export default Footer;
