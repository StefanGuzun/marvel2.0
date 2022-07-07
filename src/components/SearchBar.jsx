import React, { useRef } from 'react'
import { fetchHeroes } from '../utils/utils'

export default function SearchBar (setter) {
    let input = useRef('')
    const handleClick = async (e) => {
        let value = input.current.value 
        if(value === "") return

        try {
            let heroes = await fetchHeroes(value)
            setter(heroes)
        }   catch (err) {
                return console.error(err);
            }
    }
    
    return (
        <form>
            <input type="text" placeholder='Search' ref={input}/>
            <button onClick={handleClick}></button>
        </form>
    )
}
