import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Col, Card, Container, Row }  from 'react-bootstrap'
import { motion } from 'framer-motion'
import noimage                        from '../img/noimage.jpg'

const SpecFoods = () => {
    const recipes   = JSON.parse(localStorage.getItem('recipes'))
    const [specFood, setSpecFood] = useState(null)
    const param = useParams()
    
    const searchSpecFood = (type) => {
        const filtered = recipes.filter( recipe => recipe.tipus.includes(type) )
        setSpecFood(filtered)
    }
    
    useEffect(() => {
        searchSpecFood(param.type)
    }, [param.type])
    
    console.log(specFood)

  return (
    <Container className='my-5'>
        <div className='grid'>
            {specFood && specFood.map( item => (
                <Card key={ item.id } style={{ minHeight: '250px', borderRadius: '20px', overflow: 'hidden' }}>
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
            ))}

        </div>
    </Container>
  )
}

export default SpecFoods