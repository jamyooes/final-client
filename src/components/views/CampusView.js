const CampusView = (props) => {
  const { campus } = props;
  //waiting for students array to be populated
  // if (campus.students === undefined){
  //   return <div>Loading...</div>
  // }
  return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="CampusImg" />
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <h1>Students on Campus</h1>
      <ul>
        {campus.students.map((student) => {
          let name = student.firstname + " " + student.lastname;
          return <li key={student.id}>{name}</li>;
        })}
      </ul>
    </div>
  );
};

export default CampusView;
