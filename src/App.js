import "./App.css";

//Router
import { Switch, Route } from "react-router-dom";
//Components
import {
  HomePageContainer,
  CampusContainer,
  StudentContainer,
  AllCampusesContainer,
  AllStudentsContainer,
  AddCampusFormContainer,
  AddStudentFormContainer,
} from "./components/containers";

// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        
        /*Try to find out what parameters go into the exact path here to link them properly to their forms*/
        /*********************************************************/
        <Route exact path="/campuses" component={AddCampusFormContainer} />
        <Route exact path="/student" component={AddStudentFormContainer} />
        /*********************************************************** */
      </Switch>
    </div>
  );
};

export default App;
