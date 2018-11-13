import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ImageZoom } from 'views/Components';
import * as homeActions from './actions';

class Home extends React.Component {
    render() {
        return (<ImageZoom />);
    }
}

Home.propTypes = {
};
Home.defaultProps = {
};

const mapStateToProps = () => ({
});

const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(homeActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
