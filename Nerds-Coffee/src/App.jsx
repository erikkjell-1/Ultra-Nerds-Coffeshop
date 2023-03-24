import './App.css'
import CoffeeCard from './components/CoffeeCard'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Startpage from './views/Menu'
import Menu from './views/Menu'
import Order from './views/Order'
import OurCoffee from './views/OurCoffee'

import getApi from './components/Api'


function App() {


  const router = createBrowserRouter([
    {
      path: '/',
      element: <Startpage />
    },
    {
      path: '/menu',
      element: <Menu />
    },
    {
      path: '/order',
      element: <Order />
    },
    {
      path: '/ourcoffee',
      element: <OurCoffee />
    }
  ])

  return (
    <div className="App">
      <CoffeeCard/>
      <RouterProvider router={ router } />


    </div>
  )
}

export default App
