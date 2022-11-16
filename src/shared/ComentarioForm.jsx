import { Component } from "react";
import Comentario from '../models/Comentario';
import ComentarioService from '../services/ComentarioService';



class ComentarioForm extends Component {

    constructor(props) {
        super(props);
        this.service = new ComentarioService(this.props.tipo);
        this.state = {
            autor: "",
            mensagem: ""
        };
    }

    render() {
        return(
            <form className="bg-light p-3 rounded mb-5" onSubmit={(e) => this.salvaComentario(e)}>
                <div className="mb-3 w-50">
                    <label htmFor="autorControlInput1" className="form-label">Autor</label>
                    <input type="text" className="form-control" id="autorFormControlInput1" onChange={e => this.setState({autor: e.target.value})} placeholder="seu nome..." required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="commentFormControlTextarea1" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="commentFormControlTextarea" rows="3" onChange={e => this.setState({mensagem: e.target.value})} placeholder="digite sua mensagem aqui.." required></textarea>
                </div>
                <button  type="submit" className="btn button_app_secondary m-3 float-end">Comentar</button>
            </form>
        );
    }

    salvaComentario(e) {
        this.comentario = new Comentario(this.state.autor, this.state.mensagem);
        this.service.save(this.comentario)
            .then(res => alert("Comentário inserido com sucesso!"));
    }
}

export default ComentarioForm;