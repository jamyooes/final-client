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

const AllStudentsView = (props) => {
  const classes = useStyles();

  return (
    <div>
      

      {props.allStudents.map((student) => (
        <div key={student.id}>
          <Link to={`/students/${student.id}`}>
            <h1>
              {student.firstname} {student.lastname}
            </h1>
          </Link>
          <p>Email: {student.email}</p>
          <p>GPA: {student.gpa}</p>

          <button onClick={() => props.deleteStudent(student.id)}>
            Delete{" "}
          </button>
        </div>
      ))}
    </div>
  );
};

AllStudentsView.propTypes = {
  allStudents: PropTypes.array.isRequired,
};

export default AllStudentsView;
