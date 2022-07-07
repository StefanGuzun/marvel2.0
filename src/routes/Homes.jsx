import React from 'react'
import Grid from '../components/Grid'
import Container from '../components/Container'
import Card from '../components/Card'

export default function Homes() {
    const [heroes, setHeroes] = useState([])

    let cards

    if (heroes){
        cards = heroes.map((hero) => {
            <Card
            name={hero.name} 
            id={hero.id}
            thumbnail={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}
            />
        })
    }
    
  return (
    <Container>
        <h1>marvel heroes</h1>
        <Grid>
            {cards ? cards : ""}
        </Grid>
    </Container>
  )
}
