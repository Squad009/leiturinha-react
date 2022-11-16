import { Component } from 'react';

import ComentarioService from '../services/ComentarioService';
import ComentarioItem from './ComentarioItem';



class ComentarioLista extends Component {

    constructor(props) {
        super(props);
        this.service =  new ComentarioService(this.props.tipo)
        this.state = {
            comentarios: []
        }
    }

   async componentDidMount() {
        this.result = await this.service.list;
        this.comentariosComponent = this.result.map(comentario => <ComentarioItem autor={comentario.autor} mensagem={comentario.mensagem} />);
        this.setState({ comentarios: this.comentariosComponent });
    }

    render() {
        return(
            <div className="mx-5">{ this.state.comentarios }</div>
        );
    }

}

export default ComentarioLista;