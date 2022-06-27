import { FaPizzaSlice }         from 'react-icons/fa'
import { BiHomeSmile }          from 'react-icons/bi'
import { TbSoup }               from 'react-icons/tb'
import { GiCupcake, GiHotMeal } from 'react-icons/gi'
import { ListGroup }            from 'react-bootstrap'
import { Container }            from 'react-bootstrap'
import { NavLink }              from 'react-router-dom'

//** édes sütik : s, kevert sütik: k, sós sütik: o
const TYPES = Object.freeze({
    soup: "l",
    cake: "s",
    cakek: "k",
    cakeo: "o",
    main: "h",
    other: "e"
})
const navItems = [
    { id: 1, display: "Home",      path: `/`,                           icon: BiHomeSmile },
    { id: 2, display: "Levesek",   path: `/specfood/${TYPES.soup}`,     icon: TbSoup },
    { id: 3, display: "Sütik",     path: `/specfood/${TYPES.cake}`,     icon: GiCupcake },
    { id: 4, display: "Főételek",  path: `/specfood/${TYPES.main}`,     icon: GiHotMeal },
    { id: 5, display: "Egyéb",     path: `/specfood/${TYPES.other}`,    icon: FaPizzaSlice }
]
const navCookies = [
    { id: 1, display: "Édes sütik",     path: `/specfood/${TYPES.cake}`,    icon: BiHomeSmile },
    { id: 2, display: "Sós sütik",      path: `/specfood/${TYPES.cakek}`,   icon: BiHomeSmile },
    { id: 3, display: "Kevert sütik",   path: `/specfood/${TYPES.cakeo}`,   icon: BiHomeSmile }
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
