import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Layout from './components/Layout/Layout'
import Sidebar from './components/Sidebar/Sidebar'

function App() {
  return (
    <>
      <Sidebar />
      <Routes>
        {/* <Route path='/' element={}/> */}
        <Route path="/" element={<Layout />} />
      </Routes>
    </>
  )
}

export default App
