import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchCampusThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return <CampusView campus={this.props.campus} />;
  }
}


const mapState = (state) => {
  return {
    campus: state.campus,
  };
};


const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);
