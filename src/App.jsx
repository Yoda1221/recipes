import { Categories, Home, Nav, Search, SpecFoods } from './components'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      <Nav />
      <Search />
      <Categories />
      <Routes >
        <Route path="/" element={ <Home  /> } />
        <Route path="/specfood/:type" element={ <SpecFoods  /> } />
      </Routes>
    </>
  )
}

export default App
