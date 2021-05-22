import { Button } from "@material-ui/core";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  appBar: {
    backgroundColor: "#3A0CA3",
    height: "64px",
    shadows: ["none"],
  },
}));

const AllCampusesView = (props) => {
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return (
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Home
            </Button>
          </Link>
        </AppBar>
        <h1
          style={{
            textAlign: "center",
            fontSize: "60px",
            fontFamily: "Georgia",
            color: "#4CC9F0",
          }}
        >
          There are no campuses.
        </h1>
      </div>
    );
  }

  return (
    <div>
      <div>
        <AppBar position="static" elevation={0} className={classes.appBar}>
          <Link to={"/"}>
            <Button
              variant="contained"
              color="primary"
              style={{ marginLeft: "10px", marginTop: "10px" }}
            >
              Home
            </Button>
          </Link>
        </AppBar>
      </div>

      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{numStudents(campus)} students</p>
          <div>
            <button onClick={() => props.deleteCampus(campus.id)}>
              Delete
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

function numStudents(campus) {
  let student_total = 0;
  let numStudents = campus.students.length;
  if (numStudents > 0) {
    for (let i = 0; i < numStudents; i++) {
      student_total++;
    }
  }
  return student_total;
}

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;
