import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter, Routes } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/App.scss';

import Test from '../pages/test/test';

const App = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<Test/>}></Route>
            </Routes>
        </>
    );
};

export default App;