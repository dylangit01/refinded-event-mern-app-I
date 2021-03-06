import { makeStyles } from '@material-ui/core/styles';
import { deepPurple } from '@material-ui/core/colors';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '5px 50px',
    background: '#dddddd',
    '@media (max-width: 900px)': {
      paddingLeft: '10px'
    }
  },
  heading: {
    color: '#30475e',
    textDecoration: 'none',
    marginLeft: '20px'
  },
  image: {
    marginLeft: '15px',
    '@media (max-width: 900px)': {
      height: '50px',
      marginLeft: '30px'
    },
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    width: '400px',
  },
  profile: {
    display: 'flex',
    justifyContent: 'space-between',
    width: '400px',
  },
  userName: {
    display: 'flex',
    alignItems: 'center',
    color: '#30475e',
    '@media (max-width: 900px)': {
      paddingBottom: '15px'
    }
  },
  brandContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  purple: {
    color: theme.palette.getContrastText(deepPurple[500]),
    backgroundColor: deepPurple[500],
  },
  mobileDrawer: {
    marginTop: '30px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

