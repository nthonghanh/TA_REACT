import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class Notification {
    // static isActive = id => toast.isActive(id);
    static dismissAll = () =>  toast.dismiss();
    static success = (text = '') => toast.success(text);
    static warn = (text = '') => toast.warn(text);
    static error = (text = '') => toast.error(text);
    static info = (text = '') => toast.info(text);

}
/* eslint-disable react/jsx-filename-extension */
const NotificationContainer = () => (
    <ToastContainer
        style={ { top: '80px' } }
        position={ toast.POSITION.TOP_RIGHT }
        autoClose={ false }
        hideProgressBar={ false }
        newestOnTop={ true }
        closeOnClick
        rtl={ false }
        pauseOnVisibilityChange
        draggable
        pauseOnHover />
);

Notification.NotificationContainer = NotificationContainer;

export default Notification;
