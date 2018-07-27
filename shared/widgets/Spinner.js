import PropTypes from 'prop-types';
import withPortalHOC from 'shared/hoc/withPortalHOC';
import rawMarkup from 'shared/utils/rawMarkup';
import Loader from 'shared/widgets/Loader';

const propTypes = {
        title: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.element
        ]),
        subTitle: PropTypes.string
    }, defaultProps = {
        title: gettext('Please wait')
    };

function Spinner(props) {
    const {
        title,
        subTitle
    } = props;
    return (
        <div className="spinner">
            <div className="spinner-overlay">&nbsp;</div>
            <div className="spinner-content">
                <p dangerouslySetInnerHTML={rawMarkup(title)}></p>
                {subTitle && <p>{subTitle}</p>}
                <Loader />
            </div>
        </div>
    );
}

export default withPortalHOC(Spinner);

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;
