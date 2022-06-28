import { TYPES }                from '../config'
import { FaPizzaSlice }         from 'react-icons/fa'
import { BiHomeSmile }          from 'react-icons/bi'
import { TbSoup }               from 'react-icons/tb'
import { GiCupcake, GiHotMeal } from 'react-icons/gi'
import { Container, ListGroup } from 'react-bootstrap'
import { NavLink }              from 'react-router-dom'

const navItems = [
    { id: 1, display: "Home",      path: `/`,                          icon: BiHomeSmile },
    { id: 2, display: "Levesek",   path: `/specfood/${TYPES.soup}`,    icon: TbSoup },
    { id: 3, display: "Sütik",     path: `/specfood/${TYPES.cake}`,    icon: GiCupcake },
    { id: 4, display: "Főételek",  path: `/specfood/${TYPES.main}`,    icon: GiHotMeal },
    { id: 5, display: "Egyéb",     path: `/specfood/${TYPES.other}`,   icon: FaPizzaSlice }
]

const Categories = () => {
    return (
        <Container >
            <ListGroup horizontal className='listGroup'>
                { navItems.map((item) => (
                    <ListGroup.Item key={ item.id }>
                        <NavLink className={"navLink"} to={item.path}>
                            {<item.icon />}
                            <h4>{item.display}</h4>
                        </NavLink>
                    </ListGroup.Item>
                ))}
            </ListGroup>
        </Container>
    )
}

export default Categories
