import { BrowserRouter, Route, Routes } from "react-router-dom"
import {ObjData} from './index.ts'
import { ROOT } from "../constants/routes"



function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path={ROOT} element={<ObjData/>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
