import renderer from 'react-test-renderer';
import { shallow, mount } from 'enzyme';
import TestBaseFieldLayout from '../BaseFieldLayout';

const defaultProps = {
        meta: {
            touched: null,
            error: null
        },
        input: {
            name: 'field-name'
        },
        inputComponent: () => { return 'test case'; }
    },
    BaseFieldLayout = (props) => <TestBaseFieldLayout {...defaultProps} {...props} />;

describe('Render BaseFieldLayout', () => {
    it('render correctly BaseFieldLayout component', () => {
        const BaseFieldLayoutComponent = renderer.create(<BaseFieldLayout />).toJSON();
        expect(BaseFieldLayoutComponent).toMatchSnapshot();
    });

    it('render correctly icon prop', () => {
        const props = {
                icon: <span className="icon-exclamation" />
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('span').hasClass('icon-exclamation')).toBeTruthy();
    });

    it('check label prop is rendered correctly', () => {
        const props = {
                label: 'custom label'
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('span').hasClass('control-label-title')).toBeTruthy();
    });

    it('render correctly labelTooltipContent prop', () => {
        const props = {
                labelTooltipContent: 'tooltip for label'
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('span').hasClass('tooltip-icon')).toBeTruthy();
    });

    describe('render correctly fieldLink', () => {
        const props = {
            fieldLink: <a href="#" />
        };

        it('check prop is null by default', () => {
            const BaseFieldLayoutComponent = shallow(<BaseFieldLayout />);
            expect(BaseFieldLayoutComponent.props().fieldLink).toBe(null);
        });

        it('check prop is rendered with defined link', () => {
            const BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
            expect(BaseFieldLayoutComponent.contains(props.fieldLink)).toBeTruthy();
        });
    });

    it('render correctly prefix prop', () => {
        const props = {
                prefix: 'CHF'
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('span').hasClass('control-prefix')).toBeTruthy();
    });

    it('render correctly tooltipContent prop', () => {
        const props = {
                tooltipContent: 'tooltip for field'
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('span').hasClass('tooltip-icon')).toBeTruthy();
    });

    it('render correctly required prop', () => {
        const props = {
                label: 'custom label',
                required: true
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('.control-asterisk').length).toEqual(1);
    });

    describe('render correctly className', () => {
        const props = {
            className: 'custom-class'
        };

        it('check prop is empty by default', () => {
            const BaseFieldLayoutComponent = mount(<BaseFieldLayout />);
            expect(BaseFieldLayoutComponent.find('label').hasClass(props.className)).toBeFalsy();
        });

        it('check prop is rendered', () => {
            const BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
            expect(BaseFieldLayoutComponent.find('label').hasClass(props.className)).toBeTruthy();
        });
    });

    it('render correctly isMultiple prop', () => {
        const props = {
                isMultiple: true
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('div').at(0).hasClass('multi-select-wrap')).toBeTruthy();
    });

    it('check if field has error', () => {
        const props = {
                meta: {
                    touched: true,
                    error: 'This field is required'
                }
            },
            BaseFieldLayoutComponent = mount(<BaseFieldLayout {...props} />);
        expect(BaseFieldLayoutComponent.find('.error')).toHaveLength(1);
    });
});
