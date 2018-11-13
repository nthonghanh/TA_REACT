import matchSorter from 'match-sorter';

class FilterUtil {
    static filterFormat = (list, value, key) => { 
        return matchSorter(list, value, { keys: [ { key } ] });
    }
}

export default FilterUtil;
