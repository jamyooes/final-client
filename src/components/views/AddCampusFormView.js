import React from "react";
import PropTypes from "prop-types";

const AddCampusFormView = (props) => {
    return(
        <div>
            <form onSubmit={props.handleSubmit}>
                <h1>Enter Campus Info Below</h1>

                {/** Campus Name*/}
                <div>
                    <input 
                        value={props.name}
                        name="name"
                        placeholder="Campus Name"
                        onChange={props.handleChange}
                        />
                </div>

                {/** Campus Addess */}
                <div>
                    <input
                        value={props.address}
                        name="address"
                        placeholder="Address"
                        onChange={props.handleChange}
                        />
                </div>

                {/** Campus Description */}
                <div>
                    <input 
                        value={props.description}
                        name="description"
                        palceholder="Description"
                        onChange={props.handleChange}
                        />
                </div>

                {/** Campus Image */}
                <div>
                    <input 
                        value={props.imageUrl}
                        name="imageUrl"
                        placeholder="Image URL"
                        onChange={props.handleChange}
                        />
                </div>

                <button>Create Campus</button>
            </form>
        </div>
    );
};

AddCampusFormView.propTypes = {
    handleSubmit: PropTypes.func.isRequired,
    handleChange: PropTypes.func.isRequired,
    name: PropTypes.string.isRequired,
    address: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    imageUrl: PropTypes.string.isRequired,
  };
  
export default AddCampusFormView;