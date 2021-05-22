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
    // pass all the info back to AllStudentsView to handle the displaying
    return (
      <AllStudentsView
        allStudents={this.props.allStudents}
        title={this.props.title}
        deleteStudent={this.props.deleteStudent}
      />
    );
  }
}

// Map state to to the props
const mapState = (state) => {
  return {
    title: "list of all students",
    allStudents: state.allStudents,
    allCampuses: state.allCampuses,
  };
};

// Map dispatch to  the props
const mapDispatch = (dispatch) => {
  return {
    fetchAllStudents: () => dispatch(fetchAllStudentsThunk()),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

// prop tpyes
AllStudentsContainer.propTypes = {
  allStudents: PropTypes.array.isRequired,
  fetchAllStudents: PropTypes.func.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// export container
export default connect(mapState, mapDispatch)(AllStudentsContainer);