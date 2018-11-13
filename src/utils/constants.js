const HOME_ROUTE = '/';
const IO_ROUTE = `${ HOME_ROUTE }io`;
const INFO_ROUTE = `${ HOME_ROUTE }info`;
const MEETING_ROUTE = `${ HOME_ROUTE }meeting`;
const ADMIN_ROUTE = `${ HOME_ROUTE }admin`;

const ADMIN_RANKING = `${ ADMIN_ROUTE }/ranking`;
const TEST_ROUTE = `${ HOME_ROUTE }test`;

const ROLES = {
    CONTROLLER: 'Controller',
    USER: 'User'
};
const PATHS = {
    HOME_ROUTE,
    IO_ROUTE,
    IO_MY: `${ IO_ROUTE }/my`,
    IO_CHECK: `${ IO_ROUTE }/check`,
    IO_ALL: `${ IO_ROUTE }/all`,
    INFO_ROUTE,
    MEETING_ROUTE,
    ADMIN_ROUTE,
    ADMIN_AREAS: `${ ADMIN_ROUTE }/areas`,
    ADMIN_RANKING,
    ADMIN_RANKING_CATEGORIES: `${ ADMIN_RANKING }/categories`,
    ADMIN_RANKING_CRITERIAS: `${ ADMIN_RANKING }/criterias`,
    ADMIN_RANKING_SETUP: `${ ADMIN_RANKING }/setup`,
    ADMIN_CONFIGURATION: `${ ADMIN_ROUTE }/configuration`,
    ADMIN_MENU_INFO: `${ ADMIN_ROUTE }/menuInfo`,
    ADMIN_COMMITTEE_MEMBERS: `${ ADMIN_ROUTE }/committeeMembers`,
    TEST_ROUTE,
    NO_PERMISSON: '/access_denied',
    NOT_FOUND: '/404'
};
const PERMISSIONS = {
    CONTROLLER: {
        ROUTES: [ HOME_ROUTE, IO_ROUTE, INFO_ROUTE, MEETING_ROUTE, ADMIN_ROUTE ]
    },
    USER: {
        ROUTES: [ HOME_ROUTE, IO_ROUTE, INFO_ROUTE, MEETING_ROUTE ]
    }
};

export default { ROLES, PERMISSIONS, PATHS };
