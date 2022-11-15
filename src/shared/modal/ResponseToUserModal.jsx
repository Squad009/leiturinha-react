import { Component } from "react";



class ResponseToUserModal extends Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="modal fade" id="responseModal" tabIndex="-1" aria-labelledby="responseModalLabel" aria-hidden="true" style={{zIndex: 10}}>
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="responseModalLabel">{ this.props.title }</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            { this.props.message }
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-primary" onClick={ this.props.action }>Ok</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ResponseToUserModal;