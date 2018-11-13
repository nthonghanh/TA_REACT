import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ImageZoom = (props) => {
    const { imageUrl, title, subTitle, buttonName } = props;
    return (
        <div className='item'>
            <img src='https://cl.ly/image/0v15321t3W1a/pepsi.jpg' alt='pepsi' width='540' height='548' />
            <div className='item-overlay top'></div>
        </div>
    );
};

ImageZoom.propTypes = {
    imageUrl: PropTypes.string,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonName: PropTypes.string
};

ImageZoom.defaultProps = {
    imageUrl: '',
    title: '',
    subTitle: '',
    buttonName: ''
};
export default ImageZoom;
