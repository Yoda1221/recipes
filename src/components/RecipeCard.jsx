import { Col, Card, Row }   from 'react-bootstrap'
import noimage              from '../img/noimage.jpg'

const RecipeCard = ({ item }) => {
  return (
    <Card style={{ minHeight: '250px', borderRadius: '20px', overflow: 'hidden' }}>
        <Card.Img 
            variant="top" 
            src={ 
                item.image != null ? process.env.REACT_APP_IMG_URL + item.image : noimage
            }
            height= "300px"
            style={{ ojectFit: "cover"}}
            alt={ item.nev }
        />
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
  )
}

export default RecipeCard
