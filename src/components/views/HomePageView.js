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
    //backgroundColor: "white",
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
    //backgroundColor: "white",
    fontSize: "18px",
  },

  images: {
    display: "flex",
    margin: "auto",
    justifyContent: "center",
    width: "5%",
  },
}));

const HomePageView = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className={classes.greeting}>
        <h1>Home Page</h1>
      </div>
      <p className = {classes.images}> <img src="https://images.unsplash.com/photo-1562774053-701939374585?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y29sbGVnZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80"></img>
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
