import {makeStyles, darken} from '@material-ui/core';

export const useStyles = makeStyles({
  root: {
    position: 'relative',
  },
  button: {
    backgroundColor: (props) => props.backgroundColor,
    color: (props) => props.color,
    '&:hover': {
      backgroundColor: (props) => darken(props.backgroundColor, 0.23),
    },
  },
  loading: {
    color: (props) => props.backgroundColor,
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginTop: -12,
    marginLeft: -12,
  },
});
