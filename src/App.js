import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies";
import { setType, fetchUsers } from "./store/users";

const App = () => {
  const movies = useSelector((state) => state.movies.list);
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(()=>{
    dispatch(fetchUsers())
    .unwrap()
    .then((response)=>{
      console.log(response)
    })
    .catch(error => {
      console.log(error)
    })
  },[])


  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies
          ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
          : null}
      </ul>
      <hr />
      <button onClick={() => dispatch(addMovie({ id: 3, title: "Batman" }))}>
        Add movie
      </button>
      <hr />
      <h3>User type:{users.type}</h3>
      <button onClick={() => dispatch(setType("Admin"))}>Set type</button>
      <hr />

      <div>{users.loading ? "loading" : null}</div>
      <ul>{users ? users.users.map((user) => 
        <li key={user.id}>{user.name}</li>) 
      : null}</ul>

      {/* <button onClick={() => dispatch(fetchUsers())}>Get users</button> */}
    </>
  );
};

export default App;
