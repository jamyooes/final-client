import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { AddCampusFormView } from "../views";
import { addCampusThunk } from "../../store/thunks";

class AddCampusFormContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {name: "",address: "",description: "",imageUrl: "",};
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addCampus(this.state);
  };
  render() {
    return (
      <AddCampusFormView
        name={this.state.name}
        address={this.state.address}
        description={this.state.description}
        imageUrl={this.state.imageUrl}
        handleSubmit={this.handleSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

const mapDispatch = (dispatch) => {
  return {
    addCampus: (campus) => dispatch(addCampusThunk(campus)),
  };
};

AddCampusFormContainer.propTypes = {
  addCampus: PropTypes.func.isRequired,
};

export default connect(null, mapDispatch)(AddCampusFormContainer);
