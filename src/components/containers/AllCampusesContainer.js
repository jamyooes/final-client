import { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { fetchAllCampusesThunk, deleteCampusThunk,editCampusThunk} from "../../store/thunks";
import AllCampusesView from "../views/AllCampusesView";

class AllCampusesContainer extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.fetchAllCampuses();
  }

  EditEvent = (campus) => {
    this.setState({
      name: campus.name,
      address: campus.address,
      description: campus.description,
      imageUrl: campus.imageUrl,
    });
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleEditSubmit = (event) => {
    event.preventDefault();
    let campus = {
      id: this.state.id,
      name: this.state.name,
      address: this.state.address,
      description: this.state.description,
      imageUrl: this.state.imageUrl,
    };
    console.log(campus);
    this.setState({
      id: null,
    });
    this.props.editCampus(campus);
  };

  render() {
    return (
      <AllCampusesView
        allCampuses={this.props.allCampuses}
        deleteCampus={this.props.deleteCampus}
        editCampus = {this.props.editCampus}
        EditEvent={this.EditEvent}
        handleEditSubmit={this.handleEditSubmit}
        handleChange={this.handleChange}
      />
    );
  }
}

// map to the props
const mapState = (state) => {
  return {
    allCampuses: state.allCampuses,
  };
};

// dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchAllCampuses: () => dispatch(fetchAllCampusesThunk()),
    editCampus: (campus) => dispatch(editCampusThunk(campus)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
  };
};

// prop type
AllCampusesContainer.propTypes = {
  allCampuses: PropTypes.array.isRequired,
  fetchAllCampuses: PropTypes.func.isRequired,
};

// export container
export default connect(mapState, mapDispatch)(AllCampusesContainer);
