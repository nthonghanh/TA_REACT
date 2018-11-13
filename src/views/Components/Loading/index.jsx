import React from 'react';
import PropTypes from 'prop-types';
import { Modal, ModalBody } from 'reactstrap';
import { ClipLoader } from 'react-spinners';
import styles from './style.scss';

const { loadingColor } = styles;
const Loading = ({ show }) => {
    return (
        <Modal
            isOpen={ show }
            centered={ true }
            fade={ true }
            modalTransition={ { timeout: 300 } }
            backdropTransition={ { timeout: 300 } }
            contentClassName='content'
            className='io-loading'>
            <ModalBody>
                <ClipLoader color={ loadingColor } />
                <div className='text'>Loading ...</div>
            </ModalBody>
        </Modal>
    );
};

Loading.propTypes = {
    show: PropTypes.bool
};
Loading.defaultProps = {
    show: false
};

export default Loading;
