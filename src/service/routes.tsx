import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Test from '../pages/test'

const AppRoutes: React.FC = () => {
    return <Routes>
        <Route path="/" element={<Test/>}/>
        <Route path="*" element={<div>404</div>}/>
    </Routes>
}

export default AppRoutes
