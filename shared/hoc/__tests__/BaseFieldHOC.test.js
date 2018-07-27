import renderer from 'react-test-renderer';
import BaseFieldHOC from '../BaseFieldHOC';

import { reduxForm } from 'redux-form';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

describe('Render BaseFieldHOC', () => {
    const store = createStore(() => ({}));
    let BaseFieldHOCComponent;

    beforeEach(() => {
        const TextInput = () => { return 'text input'; },
            BaseFieldHOCWrapper = BaseFieldHOC(TextInput),
            TextField = reduxForm({ form: 'testForm' })(BaseFieldHOCWrapper);
        BaseFieldHOCComponent = renderer.create(
            <Provider store={store}>
                <TextField name="text-input" />
            </Provider>
        ).toJSON();
    });

    it('render correctly component', () => {
        expect(BaseFieldHOCComponent).toMatchSnapshot();
    });

    it('check input component is wrapped in BaseFieldLayout', () => {
        expect(BaseFieldHOCComponent.props.className).toEqual('form-group');
    });
});
