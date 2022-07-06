import './App.css';
import {Header} from "./Components/Header/Header";
import React, {useEffect, useState} from "react";
import axios from "axios";
import MD5 from "crypto-js/md5"

let MarvelBasicUrl = "http://gateway.marvel.com"
let baseUrl = `${MarvelBasicUrl}/v1/public/characters`
let privateKey = "e628d2c69acb9a2c79419d570c0b7e7c5a51134a"
let publicKey = "ee11e0020252facff7de0487eee802fd"
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
    </div>
  );
}

export default App;
