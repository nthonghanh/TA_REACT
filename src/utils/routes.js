import { push, goBack } from 'connected-react-router';

class Routes {
    /**
     * Validate path with routes based on user role permission 
     * @param {String} path
     * @param {Array} routes
     */
    static validPath = (path = '', routes = []) => routes.some(r => path === r || path.indexOf(r) > 0);
    static routeTo = path => push(path);
    static routeToBack = () => goBack();
}

export default Routes;
