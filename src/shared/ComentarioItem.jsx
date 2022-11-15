import { Component } from 'react';



class ComentarioItem extends Component{

    render() {
        return(
            <div className="ms-5">
                    <h5><strong>{this.props.autor}</strong></h5>
                    <p className="ms-3 p-2 bg-light border border-2 rounded">
                        {this.props.mensagem}
                    </p>
            </div>
        );
    }
}

export default ComentarioItem;