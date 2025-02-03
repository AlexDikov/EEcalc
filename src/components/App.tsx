import { Routes } from 'react-router-dom'
import  {homeRoute} from '../constants/routes'
import Header from './Header'

function App() {
  

  return (
    <div className='page'>
      <Header />
    <Routes>
      {homeRoute()}
    </Routes>
      </div>
  )
}

export default App
