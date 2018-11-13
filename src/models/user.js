import { Base } from 'models';

const convertAPIPayload = data => ({
    Guid: data.guid,
    SamName: data.samName,
    Email: data.email,
    FirstName: data.firstName,
    LastName: data.lastName,
    IsController: data.isController,
    IsActive: data.isActive,
    Name: data.name
});

class User extends Base {
    static toModel = json => {
        const apiJSON = convertAPIPayload(json);
        return new User(apiJSON);
    }

    // for development
    static devUser = () => {
        return new User({
            "Guid": "54f01d47-b1ea-4e4a-a321-4e61fe823275",
            "SamName": "todd.dev.user",
            "Email": "",
            "FirstName": "Dev",
            "LastName": "User",
            "IsController": false,
            "IsActive": true,
            "Name": "Dev User"
        });
    }
    static devController = () => {
        return new User({
            "Guid": "d5ae70f7-fd89-44d3-bfd1-31ca6af55cd9",
            "SamName": "todd.dev.controller",
            "Email": "",
            "FirstName": "Dev",
            "LastName": "Controller",
            "IsController": true,
            "IsActive": true,
            "Name": "Dev Controller"
        });
    }

    constructor(jsonData) {
        super();

        if (!jsonData) return;

        this.guid = jsonData.Guid;
        this.samName = jsonData.SamName || '';
        this.email = jsonData.Email || '';
        this.firstName = jsonData.FirstName || '';
        this.lastName = jsonData.LastName || '';
        this.isController = jsonData.IsController || false;
        this.isActive = jsonData.IsActive || false;
        this.name = jsonData.Name || '';
    }

    get fullName() {
        return [ this.firstName, this.lastName ].join(' ');
    }

    /** Override */
    toJSON = () => convertAPIPayload(this);
}

export default User;
