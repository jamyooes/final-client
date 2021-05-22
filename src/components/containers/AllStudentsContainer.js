import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllStudentsThunk, deleteStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import  AllStudentsView  from "../views/AllStudentsView";

class AllStudentsContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllStudents();
    this.props.fetchAllCampuses();
  }

  deleteStudent = (id) =>{
    this.props.deleteStudent(id);
    window.location='/students'
  }

  render() {
    const campuses = {};
    for(const name of this.props.allCampuses){
      campuses[name.id] = name;
    }
    // pass all the info back to AllStudentsView to handle the displaying
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        title={this.props.title}
        deleteStudent={this.props.deleteStudent}
        allCampuses={campuses}
      />
    );
  }
}

// Map state to the props
const mapState = (state) => {
  return {
    title: "List of all students",
    allCampuses: state.allCampuses,
    allStudents: state.allStudents
  };
};

// Map dispatch to the props
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk()),
  };
};

// prop type
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
};

// Exports the container
export default connect(mapState, mapDispatch)(AllStudentsContainer);