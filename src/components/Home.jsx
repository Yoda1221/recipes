import React, { useEffect, useState } from 'react'
import { Col, Card, Container, Row }  from 'react-bootstrap'
import { Splide, SplideSlide }        from '@splidejs/react-splide'
import noimage                        from '../img/noimage.jpg'
import { Categories } from '../components'
import '@splidejs/react-splide/css';

const Home = () => {
  const [recipes, setRecipes] = useState(null)

  const getAllRecipes = async () => {
    const check = localStorage.getItem('recipes')
    if (check) {
      setRecipes(JSON.parse(check))
    } else {
      const data  = await fetch(`${process.env.REACT_APP_SERVER_URL}/recipes`)
      const r     = await data.json()
      localStorage.setItem('recipes', JSON.stringify(r))
      setRecipes(r)
    }
  }

  useEffect(() => {
    getAllRecipes()
  }, [])
  

  return (
    <Container className='p-3 mt-5'>
      <Splide options={{ 
        drag: 'free',
        //type: 'loop',
        gap: '1rem',
        arrows: false,
        pagination: false,
        fixedWidth : '20rem',
        fixedHeight: '26rem'
      }}>
        {recipes && recipes.map( item => {
          return (
            <SplideSlide key={ item.id }>
              <Card style={{ minHeight: '250px', borderRadius: '20px', overflow: 'hidden' }}>
                <Card.Img variant="top" src={ noimage } alt={ item.nev }/>
                <Card.Body>
                  <Card.Title>{ item.nev }</Card.Title>
                  <Card.Text>{ item.description }</Card.Text>
                </Card.Body>
                <Card.Footer >
                  <Row>
                    <Col md={6}>
                      <small className="text-muted">
                        Hőfok: { item.hofok } °C
                      </small>
                    </Col>
                    <Col md={6}>
                      <small className="text-muted">
                        Sütési idő: { item.sutesido } min
                      </small>
                    </Col>
                    <Col md={12}>
                      <small className="text-muted">
                        Macerás? { item.macera }
                      </small>
                    </Col>
                  </Row>
                </Card.Footer>
              </Card>
            </SplideSlide>
          )
        })}
      </Splide>
    </Container>
  )
}

export default Home
