import { Cookies } from 'react-cookie';

const oneDay = 86400;
const cookieOption = {
    path: '/',
    maxAge: 365 * oneDay
};


const VIEWS = {
    ALL_IO: 'allIOs',
    MY_IO: 'myIOs',
    CHECK_IO: 'checkIOs'
};
const VIEW_KEYS = {
    NUMBER_PER_PAGE: 'nummerPerPage'
};
const defaultViewSettings = (defaultGridRow = 50) => ({
    [VIEWS.ALL_IO]: {
        [VIEW_KEYS.NUMBER_PER_PAGE]: defaultGridRow
    },
    [VIEWS.MY_IO]: {
        [VIEW_KEYS.NUMBER_PER_PAGE]: defaultGridRow
    },
    [VIEWS.CHECK_IO]: {
        [VIEW_KEYS.NUMBER_PER_PAGE]: defaultGridRow
    }
});

class LocalDataService {
    static VIEWS = VIEWS;
    static VIEW_KEYS = VIEW_KEYS;
    static defaultViewSettings = defaultViewSettings;
    constructor(cookies) {
        this.cookies = new Cookies();
    }
    // Access token
    set accessToken(accessToken) {
        const token = decodeURIComponent(accessToken);
        const size = 4000;
        const mToken = token.substr(0, size);
        const sToken = token.substr(size);

        this.cookies.set('mToken', mToken, cookieOption);
        this.cookies.set('sToken', sToken, cookieOption);
    }
    get accessToken() {
        const mToken = this.cookies.get('mToken');
        const sToken = this.cookies.get('sToken');
        return (mToken + sToken) || '';
    }

    // View settings
    set viewSetting(settings) {
        localStorage.setItem('viewSetting', JSON.stringify(settings));
    }
    get viewSetting() {
        try {
            const localData = localStorage.getItem('viewSetting');
            return JSON.parse(localData) || defaultViewSettings(); 
        } catch (e) {
            return defaultViewSettings();
        }
    }

    clearAll = () => {
        this.cookies.remove('mToken', cookieOption);
        this.cookies.remove('sToken', cookieOption);
        localStorage.removeItem('viewSetting');
    }
}

export default LocalDataService;
