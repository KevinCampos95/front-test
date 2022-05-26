import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import EmptyLayout from '../layouts/EmptyLayout';
import Register from '../containers/register';
import PublicRoute from './types/PublicRoute';

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<PublicRoute layout={EmptyLayout} component={Register} />} />
            </Routes>
        </BrowserRouter>
    );
}

Router.propTypes = {};

export default Router;