import { useSelector } from 'react-redux'


const App = () => {
  const movies = useSelector((state)=> state.movies.list)

  return(
    <>
      <h2>Movies</h2>
      <ul>
        { movies ?
          movies.map( movie => (
            <li key={movie.id}>{movie.title}</li>
          ))
        :null}
      </ul>
    </>
  )
}

export default App;