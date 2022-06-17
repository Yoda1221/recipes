import { useEffect, useState }        from 'react'
import TABLES                         from '../config'
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
      setRecipes(JSON.parse(icheck))
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
      /*
      const data  = await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`, {method: 'POST',headers: { 'Content-Type': 'application/json' },body: JSON.stringify({table: "recepts"})})
      const r     = await data.json()
      localStorage.setItem('recipes', JSON.stringify(r))
      setRecipes(r)
      const idata  = await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`, method: 'POST',headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({table: "hozzavalok"})})
      const ir    = await idata.json()
      localStorage.setItem('hozzavalok', JSON.stringify(ir))
      setIngredients(ir)
      */
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
