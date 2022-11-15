import { Component } from "react";
import { Link } from "react-router-dom";



class HistoriaItem extends Component {

    constructor(props) {
        super(props);
    }

    render() {

        return(
            <div className="col">
                <div className="card shadow-sm">
                    <img className="bd-placeholder-img card-img-top" width="100%" height="225"
                        src={`data:image/jpeg;base64,${this.props.conto.imagemCapa}`} alt="Capa Imagem do conto"
                        preserveAspectRatio="xMidYMid slice" focusable="false">
                    </img>

                    <div className="card-body">
                        <h5 className="card-title">{this.props.conto.titulo}</h5>
                        <p className="card-text">{this.props.conto.conteudo.substring(0, 30)}...</p>
                        <div className="d-flex justify-content-between align-items-center">
                            <Link to={`/conteudo_aluno/${this.props.conto.id}`} className="btn button_app_secondary">Ver</Link>
                            <small className="text-muted">9 mins</small>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default HistoriaItem;