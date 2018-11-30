import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ImageZoomDesigner = (props) => {
    const { imageUrl, designerName } = props;
    return (
        <div className='designer'>
            <div className='item'>
                <a href='/Brands-and-Designers/Michael-Berman' title={ designerName }>
                    <img src={ imageUrl } className='img-responsive' alt={ designerName } width='448' height='552' />
                    <h4 className='name'>{ designerName }</h4>
                </a>
            </div>
        </div>
    );
};

ImageZoomDesigner.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    designerName: PropTypes.string
};

ImageZoomDesigner.defaultProps = {
    designerName: ''
};

export default ImageZoomDesigner;
