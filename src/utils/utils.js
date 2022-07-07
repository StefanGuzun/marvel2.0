import MD5 from 'crypto-js/md5'

const API_URL = process.env.REACT_APP_BASE_URL

const getHash = (timeStamp, secretKey, publicKey) => {
    return MD5(timeStamp + secretKey + publicKey).toString()
}

const fetchHeroes = (value) => {
    let heroUrl = `${API_URL}/v1/public/characters`
    let timeStamp = Date.now().toString()
    let apiKey = process.env.RECT_APP_API_KEY
    let privateKey = process.env.REACT_APP_PRIVATE_KEY
    let hash = getHash(timeStamp, privateKey, apiKey)

    let url = `${heroUrl}?timeStamp${timeStamp}?apikey${apiKey}?hash${hash}&nameStartsWith=${value}`

    try{
        let response = await fetch(url)
        let data = await response.json()
        console.log(data)
        return data
    } catch (err) {
        console.error(err)

    }
}

export {fetchHeroes}