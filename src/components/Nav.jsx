import { TABLES }       from '../config'
import { GiKnifeFork }  from 'react-icons/gi'
import { FiRefreshCw }  from 'react-icons/fi'
import { Button, Container, Navbar }  from 'react-bootstrap'

const tables = [
  {tableName: TABLES.recepts},
  {tableName: TABLES.hozzavalok}
]

const Nav = () => {
  const handleRefresh = () => {
    console.log("refresh")
    tables.map( async table => {
      localStorage.removeItem(table.tableName)
      const data  = await fetch(`${process.env.REACT_APP_SERVER_URL}/getData`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({table: table.tableName})
      })
      const jsonData  = await data.json()
      localStorage.setItem(table.tableName, JSON.stringify(jsonData))
    })
  }

  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GiKnifeFork className="d-inline-block align-top" />
          &nbsp;Szakácskönyv
        </Navbar.Brand>
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            <Button size="sm" variant="outline-light" onClick={ handleRefresh }>
              <FiRefreshCw style={{ fontSize: "1.2rem"}}/>
            </Button>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Nav
