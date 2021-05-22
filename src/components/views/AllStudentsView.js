import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  appBar:{
    backgroundColor: '#3A0CA3',
    height: '64px',
    shadows: ['none'],
  },
}));

const AllStudentsView = (props) => {
  const classes = useStyles();
  if (!props.allStudents.length) {
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
        <Link  to={'/'}>
          <Button variant="contained" color="primary" style={{marginLeft: '10px', marginTop: '10px'}}>Home</Button>
        </Link>
        </AppBar>
        <h1 style={{textAlign: 'center', fontSize: '60px', fontFamily: 'Georgia', color: '#4CC9F0'}}>There are no students.</h1> 
      </div>
    );
  };

  return (
    <div>
      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{student.firstname}</h1>
            <h1>{student.lastname}</h1>
          </Link>
          <p>{student.email}</p>
          <p>{student.gpa}</p>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;