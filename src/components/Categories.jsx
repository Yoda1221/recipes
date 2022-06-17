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
    main: "h",
    other: "e"
})
const navItems = [
    { display: "Home",      path: `/`,                          icon: BiHomeSmile },
    { display: "Levesek",   path: `/specfood/${TYPES.soup}`,    icon: TbSoup },
    { display: "Sütik",     path: `/specfood/${TYPES.cake}`,    icon: GiCupcake },
    { display: "Főételek",  path: `/specfood/${TYPES.main}`,    icon: GiHotMeal },
    { display: "Egyéb",     path: `/specfood/${TYPES.other}`,   icon: FaPizzaSlice }
]

const Categories = () => {
    return (
        <Container >
            <ListGroup horizontal className='listGroup'>
                { navItems.map((item, index) => (
                    <ListGroup.Item key={ index }>
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
