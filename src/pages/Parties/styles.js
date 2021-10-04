import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90%',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 30,
    '& .toolbar': {
      width: '100%',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'center',
    },
    '& .search': {
      width: '100%',
      display: 'flex',
    },
  },
}));
