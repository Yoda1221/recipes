import { useEffect, useState }          from 'react'
import TABLES                           from '../config'
import { motion }                       from 'framer-motion'
import { Col, Card, Container, Row }    from 'react-bootstrap'
import { useParams }                    from 'react-router-dom'
import noimage                          from '../img/noimage.jpg'

const SpecFoods = () => {
    const param     = useParams()
    const recipes   = JSON.parse(localStorage.getItem(TABLES.recepts))
    const [specFood, setSpecFood] = useState(null)
    
    const searchSpecFood = (type) => {
        const filtered = recipes.filter( recipe => recipe.tipus.includes(type) )
        setSpecFood(filtered)
    }
    
    useEffect(() => {
        searchSpecFood(param.type)
    }, [param.type])

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
