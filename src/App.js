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
  UnderConstructionContainer,
} from "./components/containers";

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    fontSize: "35px",
    color: "#CDDC39",
  },
  appBar: {
    backgroundColor: "#11153e",
    shadows: ["none"],
  },
  greeting: {
    display: "flex",
    justifyContent: "center",
    backgroundColor: "white",
    width: "50%",
    margin: "auto",
  },
  links: {
    textDecoration: "none",
  },
}));
// if you create separate components for adding/editing
// a student or campus, make sure you add routes to those
// components here

const App = () => {
  const classes = useStyles();
  return (
    <div className="App">
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit">
            CRUD App
          </Typography>

          <Link className={classes.links} to={"/"}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              HOME
            </Button>
          </Link>

          <Link className={classes.links} to={"/campuses"}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              All Campuses
            </Button>
          </Link>

          <Link className = {classes.links} to={"/campuses/create"}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              Add Campus
            </Button>
          </Link>

          <Link className={classes.links} to={"/students"}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              All Students
            </Button>
          </Link>

          <Link className = {classes.links} to={"/students/create"}>
            <Button variant="contained" color="primary" style={{ marginRight: "10px" }}>
              Add Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      <Switch>
        <Route exact path="/" component={HomePageContainer} />
        <Route exact path="/campuses" component={AllCampusesContainer} />
        <Route exact path="/campus/:id" component={CampusContainer} />
        <Route exact path="/students" component={AllStudentsContainer} />
        <Route exact path="/student/:id" component={StudentContainer} />
        
        {/*Try to find out what parameters go into the exact path here to link them properly to their forms*/
        /*********************************************************/}
        <Route exact path="/campuses/create" component={AddCampusFormContainer} />
        <Route exact path="/students/create" component={AddStudentFormContainer} />
        <Route exact path="/ooofs" component={UnderConstructionContainer} />
        {/*********************************************************** */}
      </Switch>
    </div>
  );
};

export default App;
