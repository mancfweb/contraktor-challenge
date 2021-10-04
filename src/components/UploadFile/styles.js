import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  dropzone: {
    cursor: 'pointer',
    width: '100%',
    height: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    border: '2px dashed rgb(230, 234, 237)',

    '& p': {
      fontSize: 16,
      color: theme.palette.secondary.main,
    },
    '& span': {
      fontSize: 14,
      color: theme.palette.secondary.main,
    },
  },
  fakeButton: {
    cursor: 'pointer',
    display: 'flex',
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    width: 160,
    color: theme.palette.primary.contrastText,
    background: theme.palette.primary.main,
    borderRadius: 4,
    border: 0,
    margin: 10,
  },
  files: {
    display: 'flex',
    flexDirection: 'column',
    padding: 0,
    '& li': {
      display: 'flex',
      background: 'rgb(230, 234, 237)',
      borderRadius: 4,
      padding: 10,
      margin: '5px 0',
    },
  },
}));
