import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  if (!props.allCampuses.length) {
    return <div>There are no campuses.</div>;
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{numStudents(campus)} students</p>
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
