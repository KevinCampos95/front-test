import React from 'react';
import PropTypes from 'prop-types';

export function EmptyLayout({children}) {
    return <div style={{ width: '100vw', height: '100vh' }}>
        {children}
    </div>;
}

EmptyLayout.propTypes = {
    children: PropTypes.any,
};


export default (EmptyLayout);