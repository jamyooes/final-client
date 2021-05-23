import { FETCH_STUDENT, EDIT_STUDENT,DELETE_STUDENT} from "../actions/actionTypes";


// REDUCER;
const student = (state={}, action) => {
  switch (action.type) {
  case FETCH_STUDENT:
      return action.payload;
  case DELETE_STUDENT:
        return state.filter((student) => student.id !== action.payload);
  case EDIT_STUDENT:
        return state.map((student) => {
  return student.id === action.payload.id ? action.payload : student;
    });
    default:
      return state;
  }
};
export default student;