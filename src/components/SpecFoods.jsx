import { useEffect, useState } from 'react'
import { TABLES }       from '../config'
import { motion }       from 'framer-motion'
import { Container }    from 'react-bootstrap'
import { useParams }    from 'react-router-dom'
import RecipeCard from './RecipeCard'

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
                <RecipeCard key={ item.id } item={ item } />
            ))}
        </div>
    </Container>
  )
}

export default SpecFoods
