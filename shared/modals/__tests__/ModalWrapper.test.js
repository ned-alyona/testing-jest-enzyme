import { shallow, mount } from 'enzyme';
import ModalWrapper from '../ModalWrapper';

describe('Render ModalWrapper', () => {
    it('without component', () => {
        const ModalWrapperComponent = shallow(<ModalWrapper />);
        expect(ModalWrapperComponent).toMatchSnapshot();
    });

    it('with component', () => {
        const props = {
                component: () => {}
            },
            ModalWrapperComponent = shallow(<ModalWrapper {...props} />);
        expect(ModalWrapperComponent).toMatchSnapshot();
    });

    it('render correct class name', () => {
        const props = {
                modalClassName: 'custom-class-name'
            },
            ModalWrapperComponent = shallow(<ModalWrapper {...props} />).find('Modal');
        expect(ModalWrapperComponent.hasClass('custom-class-name')).toEqual(true);
    });

    it('render correct title', () => {
        const props = {
                title: 'Modal Title'
            },
            ModalWrapperComponent = shallow(<ModalWrapper {...props} />).find('ModalTitle');
        expect(ModalWrapperComponent.props().children).toEqual('Modal Title');
    });

    describe('render correct show prop', () => {
        const props = {
                show: true
            },
            ModalWrapperComponent = shallow(<ModalWrapper {...props} />).find('Modal');

        it('check prop type', () => {
            expect(ModalWrapperComponent.props().show).toBeBoolean();
        });

        it('check prop value', () => {
            expect(ModalWrapperComponent.props().show).toEqual(true);
        });
    });

    it('render correct onHide prop type', () => {
        const props = {
                onHide: () => {}
            },
            ModalWrapperComponent = shallow(<ModalWrapper {...props} />).find('Modal');
        expect(ModalWrapperComponent.props().onHide).toBeFunction();
    });

    it('render correct component prop type', () => {
        const props = {
                component: () => {}
            },
            ModalWrapperComponent = mount(<ModalWrapper {...props} />);
        expect(ModalWrapperComponent.props().component).toBeFunction();
    });
});
