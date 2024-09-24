import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './Nav'
import Home from './Home'
import Addres from './Addres'
import GetData from './GetData'
const App = () => {
  return (
   <BrowserRouter>
   <Nav/>
   <Routes>
    <Route path="/" element={<Home/>}/>
    <Route path='/add' element={<Addres/>}/>
    {/* <Route path='/getdata' element={<GetData/>}/> */}
    <Route path='/getbyid' element={<GetData/>}/>

   </Routes>
   
   </BrowserRouter>
  )
}

export default App