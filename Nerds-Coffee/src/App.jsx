import './App.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import Startpage from './views/Startpage'
import Menu from './views/Menu'
import Order from './views/Order'
import OurCoffee from './views/OurCoffee'
import NoOrder from './views/NoOrder'


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
    },
    {
      path: '/noorder',
      element: <NoOrder/>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={ router } />


    </div>
  )
}

export default App
