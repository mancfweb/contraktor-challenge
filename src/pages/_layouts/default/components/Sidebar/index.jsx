import React from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {Drawer} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import PeopleIcon from '@material-ui/icons/People';

import {SidebarNav} from './components';

import {useStyles} from './styles';

const Sidebar = ({open, variant, onClose, className, ...rest}) => {
  const classes = useStyles();

  const pages = [
    {
      title: 'Contratos',
      href: '/',
      icon: <DashboardIcon />,
    },
    {
      title: 'Partes',
      href: '/parties',
      icon: <PeopleIcon />,
    },
  ];

  return (
    <Drawer
      anchor="left"
      classes={{paper: classes.drawer}}
      onClose={onClose}
      open={open}
      variant={variant}>
      <div {...rest} className={clsx(classes.root, className)}>
        <SidebarNav className={classes.nav} pages={pages} />
      </div>
    </Drawer>
  );
};

Sidebar.propTypes = {
  className: PropTypes.string,
  onClose: PropTypes.func,
  open: PropTypes.bool.isRequired,
  variant: PropTypes.string.isRequired,
};

Sidebar.defaultProps = {
  className: '',
  onClose: () => {},
};

export default Sidebar;
