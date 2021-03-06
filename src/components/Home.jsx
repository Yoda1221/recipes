import { useEffect, useState }        from 'react'
import { COMPLEX, TABLES }            from '../config'
import { Col, Card, Container, Row }  from 'react-bootstrap'
import noimage                        from '../img/noimage.jpg'
import { Splide, SplideSlide }        from '@splidejs/react-splide'
import '@splidejs/react-splide/css'

const tables = [
  {tableName: TABLES.recepts},
  {tableName: TABLES.hozzavalok}
]

const Home = () => {
  const [recipes, setRecipes]         = useState(null)
  const [ingredients, setIngredients] = useState(null)

  const getAllRecipes = async () => {
    const check   = localStorage.getItem(TABLES.recepts)
    const icheck  = localStorage.getItem(TABLES.hozzavalok)

    if (check && icheck) {
      setRecipes(JSON.parse(check))
      setIngredients(JSON.parse(icheck))
    } else {
      tables.map( async table => {
        const data  = await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`, {
          method: 'POST', headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({table: table.tableName})
        })
        const jsonData  = await data.json()
        localStorage.setItem(table.tableName, JSON.stringify(jsonData))
        if (table.tableName === TABLES.recepts) setRecipes(jsonData) 
        if (table.tableName === TABLES.hozzavalok) setIngredients(jsonData) 
      })
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
                <Card.Img 
                  variant="top" 
                  src={ 
                    item.image != null ? process.env.REACT_APP_IMG_URL + item.image : noimage
                  } 
                  height= "200px"
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
                        H??fok: { item.hofok } ??C
                      </small>
                    </Col>
                    <Col md={6}>
                      <small className="text-muted">
                        S??t??si id??: { item.sutesido } min
                      </small>
                    </Col>
                    <Col md={12}>
                      <small className="text-muted">
                        Elk??sz??t??s: { COMPLEX[item.macera] }
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
