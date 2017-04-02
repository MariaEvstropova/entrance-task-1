import React from 'react';

export default class ModalWindow extends React.Component {
    constructor() {
        super();
        this.state = {
            shown: false,
            data: ""
        };
        this.handleClose = this.handleClose.bind(this);
    }

    componentWillReceiveProps(nexProps) {
        if (nexProps.shown) {
            this.setState({
                shown: true
            });
        }
    }

    handleOpen() {
        this.setState({
            shown: true
        });
    }

    handleClose() {
        this.setState({
            shown: false
        });
    }

    render() {
        return !this.state.shown ? null : (
            <section className="modal-window">
              <div className="modal">
                <div className="modal-header">
                    <p>Яндекс.Лекторы</p>
                    <div className="close" onClick={this.handleClose}>x</div>
                </div>
                <div className="modal-content">
                    <div className="modal-photo">
                        <img src={this.props.data.avatar} alt="photo" />
                    </div>
                    <div className="modal-info">
                        <h1>{this.props.data.name}</h1>
                        <p>{this.props.data.text}</p>
                    </div>
                </div>
              </div>
            </section>
        );
    }
}
