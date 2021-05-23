import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  console.log(props.allCampuses);
  return (
  <div>
  <form onSubmit={props.handleSubmit}>
  <h1>Enter the Student Info Below</h1>

  <div>
    <input value={props.firstname} name = "firstname" onChange = {props.handleChange} placeholder = "First Name"/>
  </div>

  <div>
    <input value = {props.lastname} name = "lastname" onChange = {props.handleChange} placeholder = "Last Name"/>
  </div>

  <div>
    <input value = {props.email} name = "email" onChange = {props.handleChange} placeholder = "Email"/>
  </div>

  <div>
  <select value={props.campusId} name="campusId" onChange={props.handleChange} placeholder="Campus ID">
      {props.allCampuses.map((campus) => (
      <option value={campus.id} key={campus.name}>
        {campus.name}
        </option>
        ))}
  <option value=""> No Campus</option>
  </select>
  </div>

  <div>
  <input value = {props.gpa} name = "gpa" onChange = {props.handleChange} placeholder = "GPA"/>
  </div>

  <div>
  <input value = {props.imageUrl} name = "imageUrl" onChange = {props.handleChange} placeholder="Image" />
  </div>
  <button>Add Student</button>
    </form>
  </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstname: PropTypes.string.isRequired,
  lastname: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AddStudentFormView;
