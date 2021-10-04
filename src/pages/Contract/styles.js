import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'minmax(360px, 400px) 2fr',
    gridGap: 15,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: '1fr',
    },

    '& .pdf-content': {
      margin: '0 30px',
      width: '100%',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      '& .actions': {
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',
      },
    },
  },
}));
