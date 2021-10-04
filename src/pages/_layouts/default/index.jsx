import React, {useState} from 'react';
import PropTypes from 'prop-types';
import clsx from 'clsx';
import {useTheme, useMediaQuery} from '@material-ui/core';

import {Sidebar, Header, Footer} from './components';
import {useStyles} from './styles';

const DefaultTheme = ({children}) => {
  const classes = useStyles();

  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('lg'), {
    defaultMatches: true,
  });

  const [openSidebar, setOpenSidebar] = useState(false);

  const handleSidebarOpen = () => {
    setOpenSidebar(true);
  };

  const handleSidebarClose = () => {
    setOpenSidebar(false);
  };

  const shouldOpenSidebar = isDesktop ? true : openSidebar;

  return (
    <div
      className={clsx({
        [classes.root]: true,
        [classes.shiftContent]: isDesktop,
      })}>
      <Header onSidebarOpen={handleSidebarOpen} />
      <Sidebar
        onClose={handleSidebarClose}
        open={shouldOpenSidebar}
        variant={isDesktop ? 'persistent' : 'temporary'}
      />
      <main className={classes.content}>
        {children}
        <Footer />
      </main>
    </div>
  );
};

DefaultTheme.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DefaultTheme;
