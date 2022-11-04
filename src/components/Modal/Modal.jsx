import { Component } from "react";
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    componentDidMount() {
        window.addEventListener('keydown', this.handleEscClick);
    }

    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleEscClick);
    }

    handleEscClick = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
        
    };

    handleModalBack = e => {
        if (e.currentTarget === e.target) { 
            this.props.onClose();
        }
    }

    render() {
        return createPortal(
            <div ClassName="Overlay" onClick={this.handleModalBack}>
                <div ClassName="Modal">{this.props.children}</div>
            </div>,
            modalRoot
        );
    }
}