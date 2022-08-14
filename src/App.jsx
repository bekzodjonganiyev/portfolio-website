import { Route, Routes } from 'react-router-dom'

import './App.scss'

import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'

function App() {
  return (
    <>
      <Layout />
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </>
  )
}

export default App
