import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

const ProductItem = (props) => {
    const { imageUrl, imageCustomUrl } = props;
    return (
        <div className='product-item'>
            <div className='item'> 
                <a className='link-img' href='/products/dimple-cocktail-graystone' title='Dimple Cocktail Graystone'>
                    <img className='img-responsive' src={ imageUrl } alt='Theodore Alexander' />
                </a> 
                <div className='info'>
                    <span className='custom' 
                        style={ { backgroundImage: `url(${ imageCustomUrl })` } }>
                        Custom Finishes
                    </span>
                    <a href='/products/dimple-cocktail-graystone' title='Dimple Cocktail Graystone'>
                        <span className='name'>Dimple Cocktail Graystone
                            <span className='status'>New</span>
                        </span>
                    </a> 
                    <p className='product-sku'>MB51003.C014</p>
                    <p className='state'>In stock</p>
                    <p className='price'>
                        <span>From</span>$3,510.00
                    </p>
                    <div className='add-wishlist'> 
                        <a className=' btn-add-to-wishlist' href='' title='Add to Wish list' tabIndex='0' > 
                            <span className='ico-wishlist'></span> 
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

ProductItem.propTypes = {
    imageUrl: PropTypes.string.isRequired,
    imageCustomUrl: PropTypes.string
};

ProductItem.defaultProps = {
    imageCustomUrl: ''
};

export default ProductItem;
