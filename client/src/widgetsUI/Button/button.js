import React from 'react';

const Button = (props) => {
    return (
        <div className='button loadmore' onClick={props.onclickFunc}>
            {props.buttonText}
        </div>
    );
};

export default Button;