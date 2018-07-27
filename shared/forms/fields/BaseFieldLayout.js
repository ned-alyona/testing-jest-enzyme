import PropTypes from 'prop-types';
import isString from 'lodash/isString';
import TooltipIcon from 'shared/widgets/TooltipIcon';

const propTypes = {
        icon: PropTypes.node,
        label: PropTypes.string,
        prefix: PropTypes.string,
        labelTooltipContent: PropTypes.string,
        tooltipContent: PropTypes.string,
        required: PropTypes.bool,
        inputComponent: PropTypes.func,
        className: PropTypes.string,
        isMultiple: PropTypes.bool,
        fieldLink: PropTypes.element
    }, defaultProps = {
        className: '',
        fieldLink: null
    };

export default function BaseFieldLayout(props) {
    const {
        icon,
        label,
        labelTooltipContent,
        fieldLink,
        prefix,
        tooltipContent,
        required,
        meta: { touched, error },
        className,
        isMultiple,
        input: { name },
        inputComponent: InputComponent
    } = props;
    return (
        <div className={`form-group${isMultiple ? ' multi-select-wrap' : ''}`}>
            {icon}
            <label htmlFor={name} className={`${className} control-label`}>
                {
                    label && <span className="control-label-title">
                        {label}
                        {required && <span className="control-asterisk">*</span>}
                    </span>
                }
            </label>
            {labelTooltipContent && <TooltipIcon tooltipContent={labelTooltipContent} {...props} />}
            <div className="control-field">
                <div className="control-element">
                    {prefix && <span className="control-prefix">{prefix}</span>}
                    {InputComponent && <InputComponent
                        {...props}
                        {...props.input}
                    />}
                    {tooltipContent && <TooltipIcon {...props} />}
                </div>
                {fieldLink}
                {touched && error && isString(error) && <span className="error">{error}</span>}
            </div>
        </div>
    );
}

BaseFieldLayout.propTypes = propTypes;
BaseFieldLayout.defaultProps = defaultProps;
