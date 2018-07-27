import { shallow, mount } from 'enzyme';
import ModalTrigger from '../ModalTrigger';

describe('Render ModalTrigger', () => {
    it('render component correctly', () => {
        const ModalTriggerComponent = shallow(<ModalTrigger><div /></ModalTrigger>);
        expect(ModalTriggerComponent).toMatchSnapshot();
    });

    describe('props and state behaviour', () => {
        const ModalTriggerComponent = mount(<ModalTrigger><div /></ModalTrigger>);

        it('ensure to have only one child (control element)', () => {
            expect(ModalTriggerComponent.findWhere(node => node.key() === 'modal-control').length).toEqual(1);
        });

        it('check children prop type', () => {
            expect(ModalTriggerComponent.props().children).toBeObject();
        });

        it('check the modal is opened', () => {
            const event = {
                preventDefault: () => {},
                stopPropagation: () => {}
            };
            ModalTriggerComponent.instance().open(event);
            expect(ModalTriggerComponent.state().toggled).toBeTruthy();
        });

        it('check the modal is closed', () => {
            ModalTriggerComponent.instance().close();
            expect(ModalTriggerComponent.state().toggled).toBeFalsy();
        });
    });
});
