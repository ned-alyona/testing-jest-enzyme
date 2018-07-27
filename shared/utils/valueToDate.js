import moment from 'moment';

export default function valueToDate(value, dateFormat) {
    if (!value) {
        return null;
    }
    return moment(value, dateFormat);
}
