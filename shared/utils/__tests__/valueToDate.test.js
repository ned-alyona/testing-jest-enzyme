import valueToDate from '../valueToDate';

const moment = require.requireActual('moment-timezone').tz.setDefault('Europe/Kiev');

describe('Render valueToDate util', () => {
    const date = '21.11.2015',
        format = 'DD.MM.YYYY';

    it('with null value', () => {
        const value = valueToDate('', format);
        expect(value).toEqual(null);
    });

    it('with defined value', () => {
        const value = valueToDate(date, format);
        expect(value).toEqual(moment(date, format));
    });

    it('check value is instanceof moment', () => {
        const value = valueToDate(date, format);
        expect(value instanceof moment).toBeTruthy();
    });
});
