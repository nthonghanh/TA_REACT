import { ApiClient, Constants, Exception } from 'utils';
import { User, AppSetting } from 'models';

const URLS = {
    GET_USER_INFO: 'getuserinfo',
    GET_APP_SETTING: 'configurations'
};

class AuthService {
    static getUserInfo = async() => {
        const data = await ApiClient.getData(URLS.GET_USER_INFO);
        const user = new User(data.value);
        if (user.guid) {
            return user;
        }

        throw new Exception(Exception.TYPES.API, 'No user information');
    }

    static getAppSetting = async() => {
        const url = `${ URLS.GET_APP_SETTING }/key?key=DefaultGridRows`;
        const data = await ApiClient.getData(url);
        const defaultGridRow = data.value.Value;

        return new AppSetting({ defaultGridRow });
    }

    /**
     * Get user's permissions
     * @param {User} user
     * @return {Object}
     */
    static getPermission = (user) => {
        const { PERMISSIONS } = Constants;

        switch(user.isController){
        case true:
            return PERMISSIONS.CONTROLLER;
        case false:
            return PERMISSIONS.USER;
        default: return null;
        }
    }
}

export default AuthService;
