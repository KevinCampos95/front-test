import React from 'react';
import PropTypes from 'prop-types';

const PublicRoute = ({component: Component, layout: Layout}) => (
    <Layout>
        <Component />
    </Layout>
);

PublicRoute.propTypes = {
    component: PropTypes.any,
    location: PropTypes.any,
    layout: PropTypes.any.isRequired,
};

export default PublicRoute;
