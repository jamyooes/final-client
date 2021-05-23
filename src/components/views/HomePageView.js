import { makeStyles } from "@material-ui/core/styles";

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
  text:{
    textAlign: "center",
    fontType: "bold",
    fontFamily: "Courier, sans-serif",
    color: "Black",
    backgroundColor: "white",
    fontSize: "18px",
  },

  images: {
    display: "block",
    marginleft: "auto",
    marginright: "auto",
    width: "50%",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.greeting}>
        <h1>Home Page</h1>
      </div>
      <p> <img src="https://images.unsplash.com/photo-1590479773265-7464e5d48118?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"></img>
      </p>
      <p className = {classes.text}> Welcome to our Campus Managment website! With our website you can view all
      the available databases already present, add new campuses, delete campuses, add new students, and see all existing
      students in their respective schools.
       </p>
      <br />
    </div>
  );
};

export default HomePageView;
