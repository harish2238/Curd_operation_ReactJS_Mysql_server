import { BrowserRouter, Route, Routes } from 'react-router-dom'
import React from 'react'
import UserData from './Client/UserData'
import AddUser from './Client/AddUser'
import EditUser from './Client/EditUser'
import Home from './Client/Home'
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <Home/>
      <Routes>
      <Route path="/add" element={<AddUser/>}  ></Route>
      <Route path="/users" element={<UserData/>}  ></Route>
      <Route path="/edit/:index" element={<EditUser/>}  ></Route>
    
      </Routes>
     </BrowserRouter>  
    </div>
  )
}

export default App;