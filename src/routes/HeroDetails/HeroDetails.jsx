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
      <di className="hero__detailsCont">
        <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} className="imageStyle"/>
        <div style={{display: "flex", flexDirection: "column"}} className="heroDetails">
          <h4 className="title">Name:</h4>
          <p className="content">{hero.name}</p>
          {hero.description ? (<>
          <h4 className="title">Description:</h4>
          <p className="content">{hero.description}</p>
          </>): null}
          <div className="heroSeries">
            <h4 className="title">Series:</h4>
            <ul className="listBox">
              {
                hero.series.items.map(item => <li key={Math.random() * 1000} className="listStyle">{item.name}</li>)
              }
            </ul>
          </div>
        </div>
      </di>
    </div>
  )
}
