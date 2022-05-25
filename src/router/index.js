import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyLayout from '../layouts/EmptyLayout';
import Login from '../containers/login';
import PublicRoute from './types/PublicRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PublicRoute layout={EmptyLayout} component={Login} />} />
            </Routes>
        </BrowserRouter>
    );
}

Router.propTypes = {};

export default Router;