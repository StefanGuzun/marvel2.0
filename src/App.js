import './App.css';
import {Header} from "./Components/Header/Header";
import SearchBar from './Components/SearchBar/SearchBar';
import React, {useEffect, useState} from "react";
import axios from "axios";
import MD5 from "crypto-js/md5";
import CharInfoCard from './Components/Header/CharacterInfoCard/CharacterCard';


let MarvelBasicUrl = "http://gateway.marvel.com"
let baseUrl = `${MarvelBasicUrl}/v1/public/characters`
let privateKey = "ddf7ad07b573516238025d35fa5b337eff6db2f9"
let publicKey = "2f7d81c2c80d2cd3a4a8658468485410"
let ts = Date.now().toString()
const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString()
}
let hash = getHash(ts, privateKey, publicKey)
let finalUrl = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
console.log(hash)


function App() {
    useEffect(()=>{
        const fetch = async () => {
            const result = await axios(finalUrl)
            console.log(result.data)
        }
        fetch()
    }, [])

  return (
    <div className="container">
      <Header/>
      <SearchBar/>
      <CharInfoCard/>
    </div>
  );
}

export default App;
