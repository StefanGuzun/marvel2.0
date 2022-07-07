import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import { fetchHero } from '../utils/utils';

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
      <div style={{backgroundColor: "antiquewhite", display: "flex", }} className="hero__detailsCont">
        <img style={{width: 500, height: 500}} src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
        <div style={{display: "flex", flexDirection: "column"}} className="heroDetails">
          <h4>Name:</h4>
          <p>{hero.name}</p>
          {hero.description ? (<>
          <h4>description:</h4>
          <p>{hero.description}</p>
          </>): null}
          <div className="heroSeries">
            <h4>series:</h4>
            <ul>
              {
                hero.series.items.map(item => <li key={Math.random() * 1000}>{item.name}</li>)
              }
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}