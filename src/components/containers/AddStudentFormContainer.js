import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addStudentThunk, fetchAllCampusesThunk } from "../../store/thunks";
import { AddStudentFormView } from "../views";

class AddStudentFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {firstname: "", lastname: "", email: "",gpa: 0, imageUrl: "", campusId: "",};
  }

  componentDidMount() {
    this.props.fetchAllCampuses();
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.state.firstname === "" || !this.state.firstname) {
      return alert("Enter first name");
    }
    if (this.state.lastname === "" || !this.state.lastname) {
      return alert("Enter last name");
    }
    if (this.state.email === "" || !this.state.email) {
      return alert("Enter email");
    }
    if (this.state.gpa < 0 || this.state.gpa > 4.0) {
      return alert("Enter gpa");
    }
    this.props.addStudent(this.state);
    window.location = "/students";
  };
  render() {
    return (
      <AddStudentFormView
        firstname={this.state.firstname}
        lastname={this.state.lastname}
        email={this.state.email}
        campusId={this.state.campusId}
        imageUrl={this.state.imageUrl}
        allCampuses={this.props.allCampuses}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    addStudent: (student) => dispatch(addStudentThunk(student)),
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
  };
};

AddStudentFormContainer.propTypes = {
  addStudent: PropTypes.func.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

export default connect(mapState, mapDispatch)(AddStudentFormContainer);
