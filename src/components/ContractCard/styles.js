import {makeStyles} from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
  root: {
    '& .card-infos': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    '& .MuiCardHeader-root': {
      paddingBottom: 0,
    },
    '& .MuiCardContent-root': {
      '& .row': {
        display: 'flex',
        alignItems: 'center',
        padding: '5px 0',
      },
      '& p': {
        fontSize: 14,
        paddingLeft: 8,
      },
    },
    '& .MuiCardActions-root': {
      borderTop: '1px solid rgba(0, 0, 0, 0.10)',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '10px 15px',
      '& p': {
        fontSize: 14,
      },
    },
  },
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
  },
}));
