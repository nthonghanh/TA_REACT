import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ImageZoom = (props) => {
    const { imageUrl, title, subTitle, buttonName } = props;
    return (
        <div className='category'>
            <div className='item'>
                <img src={ imageUrl } alt='' width='540' height='548' />
                <div className='caption text-center'>
                    <h4 className='title small'>{ title }</h4>
                    { subTitle && <p className='desc'>{ subTitle }</p> }
                    <a className='text-uppercase' href='/Brands-and-Designers/Theodore-Alexander'>{ buttonName }</a>
                </div>
            </div>
        </div>
    );
};

ImageZoom.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    title: PropTypes.string,
    subTitle: PropTypes.string,
    buttonName: PropTypes.string
};

ImageZoom.defaultProps = {
    title: '',
    subTitle: '',
    buttonName: ''
};

export default ImageZoom;
