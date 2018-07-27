import { mount } from 'enzyme';
import Spinner from '../Spinner';

describe('Render Spinner', () => {
    it('render correctly Spinner component', () => {
        const SpinnerComponent = mount(<Spinner />);
        expect(SpinnerComponent).toMatchSnapshot();
    });

    it('check prop title by default', () => {
        const SpinnerComponent = mount(<Spinner />);
        expect(SpinnerComponent.find('p').text()).toEqual('Please wait');
    });

    it('check prop type for title is string', () => {
        const props = {
                title: 'Wait'
            },
            SpinnerComponent = mount(<Spinner {...props} />);
        expect(SpinnerComponent.find('p').text()).toBeString();
    });

    it('check prop title with html tags', () => {
        const props = {
                title: '<b>Please wait</b>'
            },
            SpinnerComponent = mount(<Spinner {...props} />);
        expect(SpinnerComponent.find('p').text()).toEqual('Please wait');
    });

    describe('check prop subTitle', () => {
        const props = {
                subTitle: 'left 1 minute'
            },
            SpinnerComponent = mount(<Spinner {...props} />);

        it('type for subTitle is string', () => {
            expect(SpinnerComponent.find('p').at(1).text()).toBeString();
        });

        it('render correct text', () => {
            expect(SpinnerComponent.find('p').at(1).text()).toEqual(props.subTitle);
        });
    });

    it('check subTitle is not rendered', () => {
        const SpinnerComponent = mount(<Spinner />);
        expect(SpinnerComponent.find('p').length).toEqual(1);
    });
});
