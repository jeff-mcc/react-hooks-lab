import './App.css';
import {useState,useEffect} from 'react'
import axios from 'axios'
import PokemonList from './components/PokemonList'

function App() {
  const [pokemon,setPokemon] = useState([])

  useEffect(()=>{
    axios.get('https://pokeapi.co/api/v2/pokemon/')
      .then(res=>setPokemon(res.data.results))
      .catch(err=>console.log(err))
  },[])

  // console.log(pokemon)
  return (
    <div className="App">
      {/* <h2>test</h2> */}
      {pokemon.map((p)=>{
        return(
          <PokemonList key={p.name} p={p} />
        )
      })}
    </div>
  );
}

export default App;
