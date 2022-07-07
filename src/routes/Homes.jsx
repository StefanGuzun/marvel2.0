import React from 'react'
import Grid from '../components/Grid'
import Container from '../components/Container'

export default function Homes() {
    const [heroes, setHeroes] = useState([])

  return (
    <Container>
        <h1>marvel heroes</h1>
        <Grid>
            <div></div>
            <div></div>
            <div></div>
        </Grid>
    </Container>
  )
}
