import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Navbar from './components/Navbar'
import Categories from './components/Categories'
import Category from './components/Category'

const App = ()=> {
  return (
    <>
      <Header title='Book Store'/>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='about' element={<About />}/>
        <Route path='categories' element={<Categories />} >
          <Route index element={<Category />}/>
          <Route path=':category' element={<Category />}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
