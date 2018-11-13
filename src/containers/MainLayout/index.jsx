import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter, Route, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Notification, Constants } from 'utils';
import { Loading } from 'views/Components';
import { Home, NoPermission, NoMatch } from 'views';
import * as mainLayoutActions from './actions';
import './style.scss';

const { HOME_ROUTE, NO_PERMISSON } = Constants.PATHS;

class MainLayout extends Component {

    render() {
        const { isProcessing } = this.props;
        return (
            <div>
                <div className='io-main-layout'>
                    <main>
                        <Switch>
                            <Route exact path={ HOME_ROUTE } component={ Home } />
                            <Route path={ NO_PERMISSON } component={ NoPermission } />
                            <Route component={ NoMatch } />
                        </Switch>
                    </main>
                </div>
                <Notification.NotificationContainer />
                <Loading show={ isProcessing } />
            </div>
        );
    }
}

MainLayout.propTypes = {
    isProcessing: PropTypes.bool
};
MainLayout.defaultProps = {
    isProcessing: false
};

const mapStateToProps = (state) => ({
    isProcessing: state.App.get('isProcessing')
});
const mapDispatchToProps = (dispatch) => ({
    actions: bindActionCreators(mainLayoutActions, dispatch)
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainLayout));
