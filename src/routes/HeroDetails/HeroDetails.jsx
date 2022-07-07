import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { fetchHero } from '../../utils/utils';
import "./HeroDetails.css"

export default function HeroDetails() {
  let {id} = useParams();

  const [hero, setHero] = useState()

  useEffect(() => {
    fetchHero(id)
    .then((data) => setHero(data[0]))
    .catch((err) => console.error(err))
  }, []);

  if (!hero) return
  return (
    <div  className="container">
      <div style={{display: "flex"}}>
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="imageStyle"/>
        <div style={{display: "flex",flexDirection: "column",backgroundColor:"white",height: 500, borderRadius: 5,}} className="heroDetails">
          <h4 className="titles">Name:</h4>
          <p className="contentSize">{hero.name}</p>
          {hero.description ? (<>
          <h4 className="titles">Description:</h4>
          <p className="contentSize">{hero.description}</p>
          </>): null}
          <div className="heroSeries">
            <h4 className="titles">Series:</h4>
            <ul style={{overflowY: "scroll", height: "25%", margin:"0 40px"}}>
              {
                hero.series.items.map(item => <li key={Math.random() * 1000} className="listStyle">{item.name}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
