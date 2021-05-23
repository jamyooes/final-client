import { Component } from "react";
import { connect } from "react-redux";
import {
  deleteStudentThunk,
  editStudentThunk,
  fetchStudentThunk,
} from "../../store/thunks";
import StudentsView from "../views/StudentsView";

class StudentContainer extends Component {
  constructor() {
    super();
    this.state = {
      firstName: null,
      lastName: null,
      email: null,
      imageUrl: null,
      gpa: null,
    };
  }

  OnClickEditStudent = (student) => {
    console.log("Student: ", student);
    this.setState(
      {
        firstName: student.firstName,
        lastName: student.lastName,
        email: student.email,
        imageUrl: student.imageUrl,
        gpa: student.gpa,
      },
    );
  };

  StudentCancel = () => {
    this.setState({
      firstName: null,
      lastName: null,
      email: null,
      imageUrl: null,
      gpa: null,
    });
  };

  handleChangeEvent = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleEditStudentEvent = (event) => {
    event.preventDefault();
    let student = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      imageUrl: this.state.imageUrl,
      gpa: this.state.gpa,
    };

    console.log(student);
    this.setState({
      firstName: null,
      lastName: null,
      email: null,
      imageUrl: null,
      gpa: null,
    });
    this.props.editStudent(student);
  };


  componentDidMount() {
    this.props.fetchStudent(this.props.match.params.id);
    this.props.fetchAllCampuses();
  }

  delete_Student = (id) =>{
    this.props.deleteStudent(id);
    window.location = '/students'; 
  }

  render() {
    const campuses = {};
    for (const campus of this.props.allCampuses) {
      campuses[campus.id] = campus;
    }
    return (
      <StudentsView
        firstName={this.state.firstName}
        lastname={this.state.lastName}
        email={this.state.email}
        imageUrl={this.state.imageUrl}
        gpa={this.state.gpa}
        student={this.props.student}
        allCampuses={campuses}
        OnClickEditStudent={this.OnClickEditStudent}
        StudentCancel={this.StudentCancel}
        delete_Student={this.props.delete_Student}
        handleEditStudentEvent={this.handleEditStudentEvent}
        handleChangeEvent={this.handleChangeEvent}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    student: state.student,
    allCampuses: state.allCampuses,
  };
};

const mapDispatch = (dispatch) => {
  return {
    fetchStudent: (id) => dispatch(fetchStudentThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    editStudent: (student) => dispatch(editStudentThunk(student)),
  };
};

export default connect(mapState, mapDispatch)(StudentContainer);
