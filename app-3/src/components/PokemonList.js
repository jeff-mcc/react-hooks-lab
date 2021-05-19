import {useState,useEffect} from 'react'
import axios from 'axios'
import {Link} from 'react-router-dom'

const PokemonList = () => {
    const [pok,setPok] = useState([])

    useEffect(()=>{
        axios.get('https://pokeapi.co/api/v2/pokemon')
            .then(res=>setPok(res.data.results))
            .catch(err=>console.log(err))
    })

    return(
        <div>
            {pok.map((e,i)=>{
                return(
                    <Link to={`/pokemon/${e.name}`} key={i}><h3>{e.name}</h3></Link>
                )
            })}
        </div>
    )
}

export default PokemonList