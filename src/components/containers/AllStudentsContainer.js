import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import {
  fetchAllStudentsThunk,
  deleteStudentThunk,
  fetchAllCampusesThunk,
} from "../../store/thunks";
import AllStudentsView from "../views/AllStudentsView";

class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  deleteStudent = (id) => {
    this.props.deleteStudent(id);
    window.location = "/students";
  };

  render() {
  
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        title={this.props.title}
        deleteStudent={this.props.deleteStudent}
      />
    );
  }
}

const mapState = (state) => {
  return {
    title: "list of all students",
    allStudents: state.allStudents,
    allCampuses: state.allCampuses,
  };
};


const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};


AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};


export default connect(mapState, mapDispatch)(AllStudentsContainer);
