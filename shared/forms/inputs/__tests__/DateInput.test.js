import renderer from 'react-test-renderer';
import { mount } from 'enzyme';
import TestDateInput from '../DateInput';

const moment = require.requireActual('moment-timezone').tz.setDefault('America/Los_Angeles'),
    defaultProps = {
        minDate: moment(0)
    },
    DateInput = (props) =>
        <TestDateInput
            {...defaultProps}
            {...props}
        />;

describe('Render DateInput', () => {
    it('render correctly date component', () => {
        const DateInputComponent = renderer.create(<DateInput />).toJSON();
        expect(DateInputComponent).toMatchSnapshot();
    });

    it('render date input correctly with empty value', () => {
        const props = {
                value: null
            },
            DateInputComponent = mount(<DateInput {...props} />);
        expect((DateInputComponent).prop('value')).toEqual(null);
    });

    it('check the onChange callback', () => {
        const onChange = jest.fn(),
            props = {
                value: '20.01.2018',
                onChange
            },
            DateInputComponent = mount(<DateInput {...props} />).find('input');
        DateInputComponent.simulate('change', { target: {value: moment('2018-01-22')} });
        expect(onChange).toHaveBeenCalledWith('22.01.2018');
    });

    it('check the type of value', () => {
        const props = {
                value: '10.03.2018'
            },
            DateInputComponent = mount(<DateInput {...props} />);
        expect(DateInputComponent.prop('value')).toBeString();
    });

    it('check DatePicker popup open', () => {
        const DateComponent = mount(<DateInput />),
            dateInput = DateComponent.find("input[type='text']");
        dateInput.simulate('click');
        expect(DateComponent.find('.react-datepicker')).toHaveLength(1);
    });

    it('check month and years dropdowns displayed', () => {
        const props = {
                showMonthYearsDropdowns: true
            },
            DateInputComponent = mount(<DateInput {...props} />).find('.datepicker');
        expect(DateInputComponent.hasClass('react-datepicker-hide-month')).toEqual(true);
    });
});
