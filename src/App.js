import './App.css';
import {Header} from "./Components/Header/Header";
import SearchBar from './Components/SearchBar/SearchBar';
import React, {useEffect, useState} from "react";
import axios from "axios";
import MD5 from "crypto-js/md5"

let MarvelBasicUrl = "http://gateway.marvel.com"
let baseUrl = `${MarvelBasicUrl}/v1/public/characters`
let privateKey = "333b80168c7b4eade803b339a942fd6d9bc82c3c"
let publicKey = "5acfe49a16e8e56d0d8292e1f7f13dae"
let ts = Date.now().toString()
const getHash = (ts, privateKey, publicKey) => {
    return MD5(ts + privateKey + publicKey).toString()
}
let hash = getHash(ts, privateKey, publicKey)
let finalUrl = `${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`


function App() {
    useEffect(()=>{
        const fetch = async () => {
            const result = await axios(finalUrl)
            console.log(result.data.data.results)
        }
        fetch()
    }, [])

  return (
    <div className="container">
      <Header/>
      <SearchBar/>
    </div>
  );
}

export default App;
