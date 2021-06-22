import React from 'react';
import PropTypes from 'prop-types';


const Header = ({titulo}) => {
    return ( 
        <nav>
            <div className="nav-wrapper light-blue darken-2">
                <a href="#!" className="brand-logo">{titulo}</a>
            </div>
        </nav>
    );
}

Header.propTypes = {
    mensaje: PropTypes.string.isRequired
}

export default Header;