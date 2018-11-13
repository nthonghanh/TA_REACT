import moment from 'moment';
import { Exception } from 'utils';

export const DATE_FORMAT = 'DD MMM YY';
export const DATE_TIME_FORMAT = 'DD MMM YY hh:mm';
export const DATE_FORMAT_FULL_YEAR = 'DD MMM, YYYY';
export const DATE_FORMAT_YEAR = 'DD/MM/YYYY';
export const DATE_FORMAT_YEAR_MONTH = 'YYYY-MM-DD';

export const getYesterday = (currentDate) => {
    const d = new Date (currentDate);
    d.toISOString();
    d.setDate(d.getDate()-1);
    return d;
};
export const getTomorrow = (currentDate) => {
    const d = new Date (currentDate);
    d.toISOString();
    d.setDate(d.getDate()+1);
    return d;
};
class DateUtil {
    /**
     * Format date object to string for displaying on view
     * @param {Date} date
     * @return {String}
     */
    static dateString = date => { return (date instanceof Date ? new moment(date).format(DATE_FORMAT) : ''); };
    static dateTimeString = date => { return (date instanceof Date ? new moment(date).format(DATE_TIME_FORMAT) : ''); };
    static dateFullYearString = date => { 
        return (date instanceof Date ? new moment(date).format(DATE_FORMAT_FULL_YEAR) : ''); };
    static dateYearString = date => { return (date instanceof Date ? new moment(date).format(DATE_FORMAT_YEAR) : ''); };
    static dateYearMonthString = date => { 
        return (new moment(date).format(DATE_FORMAT_YEAR_MONTH) : ''); };
    /**
     * Compare 2 Date object
     * @param {moment} date1
     * @param {moment} date2
     * @throw Exception
     * @return {Number}
     * // -1: date1 < date2
     * //  0: date1 = date2
     * //  1: date1 > date2 
     */
    static compareDate = (date1, date2, includeTime = false, onlyDate=false) => {
        if (date1 === null) {
            return -1;
        }
        if (date2 === null) {
            return 1;
        }
        if (date1 instanceof Date && date2 instanceof Date) {
            if(onlyDate) {
                date1.setHours(0,0,0,0);
                date2.setHours(0,0,0,0);
            }
            if (date1 < date2) {
                return -1;
            }
            else if (date1 === date2) {
                return 0;
            }
            return 1;
        }
        if (date1 instanceof moment && date2 instanceof moment) {
            if (includeTime) {
                if (date1.isSame(date2)) { return 0; }
            } else {
                const year = date1.isSame(date2, 'year');
                const month = date1.isSame(date2, 'month');
                const day = date1.isSame(date2, 'day');
                if (day && month && year) { return 0; }
            }
            if (date1.isBefore(date2)) { return -1; }
            return 1;
        } else {
            throw new Exception(Exception.TYPES.INVALID_ARGUMENT);
        }
    }
    
    static getPathByDate = (value, field) => {
        let tomorrow = getTomorrow(value);
        let yesterday =  getYesterday(value);
        const yesterdayString = yesterday.toISOString().toString().slice(0,10).concat('T23%3A59%3A59.000Z');
        const tomorrowString = tomorrow.toISOString().toString().slice(0,10).concat('T00%3A00%3A00.000Z');
        if (field === 'createdDate') {
            return `(CreatedDate%20gt%20${ yesterdayString }%20and%20CreatedDate%20lt%20${ tomorrowString })`;
        }
        else if (field === 'reviewedDate') {
            return `(ReviewedDate%20gt%20${ yesterdayString }%20and%20ReviewedDate%20lt%20${ tomorrowString })`;
        }
        else if (field === 'approvedDate') {
            return `(ApprovedDate%20gt%20${ yesterdayString }%20and%20ApprovedDate%20lt%20${ tomorrowString })`;
        }
        else if (field === 'meetingDate') {
            return `(Date%20gt%20${ yesterdayString }%20and%20Date%20lt%20${ tomorrowString })`;
        }
        else {
            return `(SubmittedDate%20gt%20${ yesterdayString }%20and%20SubmittedDate%20lt%20${ tomorrowString })`;
        }
    }

    static getLocalDateTime = (value) => {
        const d = new Date();
        return value.toString().replace('00:00:00', d.toTimeString().slice(0,8));
    };
}

export default DateUtil;
