
import './App.css'
import "./store/script"

import Header from './components/Header'
import { Outlet } from 'react-router'
function App() {
  return (
    <>
      <main>
        <Header />
        <Outlet />
      </main>
    </>
  )
}

export default App
