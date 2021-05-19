import {useState,useEffect} from 'react'
import axios from 'axios'

const Pokemon = (props) => {
    const [onePok,setOnePok] = useState(null)
    const {name} = props.match.params;

    useEffect(()=>{
        axios.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
            .then(res=>setOnePok(res.data))
            .catch(err=>console.log(err))
    },[name])

    return(
        <>
            {onePok ? (
                <div>
                    <h2>{onePok.name}</h2>
                    <img src={onePok.sprites.front_default} alt={onePok.name}/>
                </div>
            ):(
                <div>...Loading</div>
            )}
        </>
    )
}

export default Pokemon