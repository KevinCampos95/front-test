import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { get } from 'lodash';
import { useNavigate  } from 'react-router-dom';


const PrivateRoute = ({component: Component, layout: Layout}) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const token = get(user, 'token', '');
    const navigate = useNavigate();

    useEffect(() => {
        if (!token) {
            navigate('/');
        }
    }, [navigate, token]);

    return (
        <Layout>
            <Component />
        </Layout>
    );
};

PrivateRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.any,
    layout: PropTypes.any.isRequired,
};

export default PrivateRoute;
