import { autobind } from 'core-decorators';
import PropTypes from 'prop-types';
import { Component, Children, cloneElement } from 'react';

import ModalWrapper from './ModalWrapper';

const propTypes = {
    children: PropTypes.object
};

export default class ModalTrigger extends Component {
    state = {
        toggled: false
    }

    @autobind
    open(e) {
        e.stopPropagation();
        e.preventDefault();
        this.setState({ toggled: true });
    }

    @autobind
    close() {
        this.setState({ toggled: false });
    }

    render() {
        const { children } = this.props;

        // ensure that we have only one child (control element)
        let child = cloneElement(Children.only(children), { onClick: this.open, key: 'modal-control' });
        return [
            child,
            <ModalWrapper {...this.props} show={this.state.toggled} onHide={this.close} key="modal-dialog" />
        ];
    }
}

ModalTrigger.propTypes = propTypes;
