import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const TYPES={
    blue: 1,
    red: 2,
    text: 3
};

const getStyle = (type,fill) => {
    if(type === TYPES.blue){
        if(fill === true){
            return 'button-blue';
        }
        return 'button-border-blue';
    }
    else if (type === TYPES.red) {
        if(fill === true){
            return 'button-red';
        }
        return 'button-border-red';
    }
    else if (type === TYPES.text && fill === '') {
        return '';
    }
};

const Button = (props) => {
    return (
        <div className='io-button'>
            <button
                className={ 'button-default ' + getStyle(props.type,props.fill) }
                onClick={ props.onclick }
                disabled={ props.disable }>
                { props.text }
            </button>
        </div>
    );
};

Button.propTypes = {
    type: PropTypes.number.isRequired,
    fill: PropTypes.bool,
    text: PropTypes.string.isRequired,
    onclick: PropTypes.func.isRequired,
    disable: PropTypes.bool
};

Button.defaultProps = {
    fill: false,
    disable: false
};
Button.TYPES= TYPES;
export default Button;
