import { Base } from 'models';

const convertAPIPayload = data => ({
    defaultGridRow: data.defaultGridRow
});

export default class AppSetting extends Base {
    static toModel = json => {
        const apiJSON = convertAPIPayload(json);
        return new AppSetting(apiJSON);
    }
    constructor(json) {
        super();
        this.defaultGridRow = parseInt(json.defaultGridRow, 10) || 50;
    }

    /** Override */
    toJSON = () => convertAPIPayload(this);
}
