import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Dashboard from './Dashboard/Dashboard.jsx';
import Join from './Join/Join.jsx'
import Create from './Create/Create.jsx';
import Follow from './Follow/Follow.jsx'

const Routess = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard/>}/>
      <Route path="/Join" element={<Join/>}/>
      <Route path="/create" element={<Create/>}/>
      <Route path="/Follow" element={<Follow/>}/>
    </Routes>
  )
}

export default Routess