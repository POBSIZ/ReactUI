import React, { useEffect, useState } from 'react';
import { Link, Route, BrowserRouter } from "react-router-dom";
import { hot } from 'react-hot-loader';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import './assets/css/style.scss';

function Test() {
    return (
        <>
            <h1>Hello</h1>
        </>
    );
}

export default hot(module)(Test);