import { Container, Form, InputGroup }  from 'react-bootstrap'
import { FaSearch } from 'react-icons/fa'

const Search = () => {
    return (
        <Container className='mt-3'>
            <InputGroup size="sm" className="search mb-3">
                <InputGroup.Text className='searchIcon'><FaSearch/></InputGroup.Text>
                <Form.Control type="text" placeholder="Keresés a receptek közt"  />
            </InputGroup>
        </Container>
    )
}

export default Search
