import React, {useEffect, useState} from "react";
import {useParams} from "react-router-dom";
import {fetchHero} from "/src/utils/utils";

export default function HeroDetails (){
    let { id } = useParams()

    const [hero, setHero] => useState();

    useEffect(()=>{
        fetchHero(id)
            .then((data) => setHero(data[0]))
            .catch((err) => console.log(err))
    }, [])
    if (!hero) return;
    return (
        <div className="container large">
            <div style={{backgroundColor: "antiquewhite", display: "flex",}} className="hero__details-container">
                <img src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`} alt="hero-image"/>
                <div className="hero__details">
                    <h4>Name</h4>
                    <p>{hero.name}</p>
                    {hero.description ? (
                        <div>
                            <h4>Description</h4>
                            <p>{hero.description}</p>
                        </div>
                    ) : null}
                    <div className="hero__series">
                        <h4>Series</h4>
                        <ul>
                            {hero.series.items.map((s) => (
                                <li key={Math.random() * 1000}>{s.name}</li>)
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}
