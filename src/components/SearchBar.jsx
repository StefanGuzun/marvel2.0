import React,{useRef} from "react";
import "./componentsStyle/SearchBar.css";
import { fetchHeroes } from "../utils/utils";

export default function SearchBar({ setter }) {
  let input = useRef("");
  const handleClick = async (e) => {
    e.preventDefault();
    let value = input.current.value;
    if (value === "") return;

    try {
        let heroes = await fetchHeroes(value);
        setter(heroes);
    } catch (err) {
        console.log(err);
    }
  }
  return(
    <form style={{display: "flex", justifyContent: "center"}}>
    <div>
      <input className="searchBarInput" type="text" placeholder="Search Hero ..." ref={input} />
      <button className="searchButton" onClick={handleClick}>Search</button>
      </div>
   </form>
  );
  }
