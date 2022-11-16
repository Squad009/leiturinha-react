import { Component } from 'react';
import { Link } from 'react-router-dom';



class PostagemProfessorItem extends Component {

    render() {
        return(
            <div className="card col-md-5 mb-5" style={{maxWidth: 540}}>
                <div className="row g-0">
                    <div className="col-md-3" style={{height: 200}}>
                        <img src={`data:image/jpeg;base64,${this.props.material.imagemConteudo}`} alt="Imagem sobre o conteúdo" height="100%" width="100%" alt="..." />
                    </div>
                    <div className="col-md-7">
                        <div className="card-body">
                            <h5 className="card-title">{this.props.material.titulo}</h5>
                            <p className="card-text">{this.props.material.conteudo.substring(0, 30)}...</p>
                            <Link to={`/conteudo_professor/${this.props.material.id}`} className="btn button_app_secondary" role="button"
                                style={{padding: ".5rem!important", margin: "auto"}}>Acessar</Link>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PostagemProfessorItem;