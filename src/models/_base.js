import { Exception } from 'utils';
class Base {
    static toModel = json => { throw new Exception(Exception.TYPES.NOT_IMPLEMENT, 'Does not implemented'); }
    toJSON = () => { throw new Exception(Exception.TYPES.NOT_IMPLEMENT, 'Does not implemented'); }
    toString = () => { return ''; }
}

export default Base;
