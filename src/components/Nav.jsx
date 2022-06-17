import { GiKnifeFork }        from 'react-icons/gi'
import { Container, Navbar }  from 'react-bootstrap'

const Nav = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">
          <GiKnifeFork className="d-inline-block align-top" />
          &nbsp;Szakácskönyv
        </Navbar.Brand>
      </Container>
    </Navbar>
  )
}

export default Nav
