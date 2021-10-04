import React, {forwardRef} from 'react';
import {NavLink as RouterLink} from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {List, ListItem, Button} from '@material-ui/core';

import {useStyles} from './styles';

const CustomRouterLink = forwardRef((props, ref) => (
  <div ref={ref} style={{flexGrow: 1}}>
    <RouterLink {...props} />
  </div>
));

const SidebarNav = ({pages, className, ...rest}) => {
  const classes = useStyles();

  return (
    <List {...rest} className={clsx(classes.root, className)}>
      {pages.map((page) => (
        <ListItem className={classes.item} disableGutters key={page.title}>
          <Button
            activeClassName={classes.active}
            className={classes.button}
            component={CustomRouterLink}
            to={page.href}>
            <div className={classes.icon}>{page.icon}</div>
            {page.title}
          </Button>
        </ListItem>
      ))}
    </List>
  );
};

SidebarNav.propTypes = {
  className: PropTypes.string,
  pages: PropTypes.array.isRequired,
};

SidebarNav.defaultProps = {
  className: '',
};

export default SidebarNav;
