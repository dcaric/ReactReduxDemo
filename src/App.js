import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addMovie } from "./store/movies"; // import action
import { setType, fetchUsers } from "./store/users"; // import actions

const App = () => {
  // with reducers our component is going to get access to  the redux where movies reducer is stored
  // same for the other reducers...
  const movies = useSelector((state) => state.movies.list); // state has the whole and with this we just used part of it, state.movies.list
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch(); // for dispatching redux actions


  // special case where we are using reducer fetchUsers outside  (before) of return

  useEffect(()=>{
    dispatch(fetchUsers())
    .unwrap() // gives the ability to use .then and .catch
    .then((response)=>{
      // successfull case but also case when we get error
      // instead of putting here a lot of if error we can use .unwrap()
      console.log(response) // this is whole repoonse from <fetchUsers = createAsyncThunk>
    })
    .catch(error => {
      // network error case and handling error
      console.log(error)
    })
  },[]) // [] -> only on component reload


  return (
    <>
      <h2>Movies</h2>
      <ul>
        {movies
          ? movies.map((movie) => <li key={movie.id}>{movie.title}</li>)
          : null}
      </ul>
      <hr />
      {/* we are here by clicking on buttn dispatching action addMovie */}
      {/* payload is object  - { id: 3, title: "Batman" } */}
      <button onClick={() => dispatch(addMovie({ id: 3, title: "Batman" }))}>
        Add movie
      </button>
      <hr />
      <h3>User type:{users.type}</h3>
      {/* dispatching action setType */}
      <button onClick={() => dispatch(setType("Admin"))}>Set type</button>
      <hr />

      <div>{users.loading ? "loading" : null}</div>
      <ul>{users ? users.users.map((user) => 
        <li key={user.id}>{user.name}</li>) 
      : null}</ul>

      <button onClick={() => dispatch(fetchUsers())}>Get users</button>
    </>
  );
};

export default App;
