import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '90%',
  },
  header: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginBottom: 30,
    '& .search': {
      width: '100%',
      display: 'flex',
    },
  },
  container: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: 15,
    [theme.breakpoints.down('md')]: {
      gridTemplateColumns: 'repeat(2, 1fr)',
    },
    [theme.breakpoints.down('xs')]: {
      gridTemplateColumns: '1fr',
    },
  },
  card: {
    '& .card-infos': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
  },
  reviewData: {
    listStyle: 'none',
    display: 'flex',
    flexDirection: 'column',
    padding: 15,
    '& li': {
      display: 'flex',
      flexDirection: 'column',
      padding: '5px 0',
      '& p': {
        width: '100%',
      },
      '& .parties-row': {
        display: 'flex',
        flexDirection: 'column',
      },
    },
  },
  successContent: {},
}));
