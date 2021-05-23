import React from "react";
import PropTypes from "prop-types";

const AddStudentFormView = (props) => {
  console.log(props.allCampuses);
  return (
    <div>
      <form onSubmit={props.handleSubmit}>
        <h1>Enter the Student Info Below</h1>

        {/**first name */}
        <div>
          <input
            value={props.firstName}
            name="firstName"
            onChange={props.handleChange}
            placeholder="First Name"
          />
        </div>

        {/** last name */}
        <div>
          <input
            value={props.lastName}
            name="lastName"
            onChange={props.handleChange}
            placeholder="Last Name"
          />
        </div>

        {/** email */}
        <div>
          <input
            value={props.email}
            name="email"
            onChange={props.handleChange}
            placeholder="Email"
          />
        </div>

        {/** campus */}
        <div>
          <select
            value={props.campusId}
            name="campusId"
            onChange={props.handleChange}
            placeholder="Campus ID"
          >
            {props.allCampuses.map((campus) => (
              <option value={campus.id} key={campus.name}>
                {campus.name}
              </option>
            ))}
            <option value=""> No Campus</option>
          </select>
        </div>

        {/** gpa */}
        <div>
          <input
            value={props.gpa}
            name="gpa"
            onChange={props.handleChange}
            placeholder="GPA"
          />
        </div>

        {/** image */}
        <div>
          <input
            value={props.imageUrl}
            name="imageUrl"
            onChange={props.handleChange}
            placeholder="Image"
          />
        </div>

        <button>Add Student</button>
      </form>
    </div>
  );
};

AddStudentFormView.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  handleChange: PropTypes.func.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
};

export default AddStudentFormView;
