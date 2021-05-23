import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllStudentsView = (props) => {
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

          <button onClick={() => props.editStudent(student)}>
            Edit{" "}
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
