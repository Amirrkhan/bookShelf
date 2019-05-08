import React from 'react';

// COMPONENTS
import Header from '../../components/Header/header'


const Layout = (props) => {
    return (
        <div>
            <Header/>
            {props.children}            
        </div>
    );
};

export default Layout;