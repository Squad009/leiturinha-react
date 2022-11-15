import { Component } from "react";



class ComentarioForm extends Component {
    render() {
        return(
            <form className="bg-light p-3 rounded mb-5" onSubmit={(e) => this.salvaComentario(e)}>
                <div className="mb-3 w-50">
                    <label htmFor="exampleFormControlInput1" className="form-label">Autor</label>
                    <input type="text" className="form-control" id="exampleFormControlInput1" placeholder="seu nome..." required/>
                </div>
                <div className="mb-3">
                    <label htmlFor="commentFormControlTextarea1" className="form-label">Mensagem</label>
                    <textarea className="form-control" id="commentFormControlTextarea" rows="3"  placeholder="digite sua mensagem aqui.." required></textarea>
                </div>
                <button  type="submit" className="btn button_app_secondary m-3 float-end">Comentar</button>
            </form>
        );
    }

    salvaComentario(e) {
        e.preventDefault();
    }
}

export default ComentarioForm;