import React from 'react'
import {Link, Routes, Route } from 'react-router-dom';
import Layout from '../layout/layout';


const Router = () => {
    return (
        <Routes>
            <Route element={<Layout/>}>
            {/* <Route path="history"element={<History/>}/> */}


            </Route>
           
        </Routes>
    )
}

export default Router