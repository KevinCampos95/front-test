import React from 'react';
import PropTypes from 'prop-types';

export function EmptyLayout({children}) {
    return <div>
        {children}
    </div>;
}

EmptyLayout.propTypes = {
    children: PropTypes.any,
};


export default (EmptyLayout);