import { Component } from 'react';
import MaterialService from '../../services/MaterialService';



class ApresentacaoConteudo extends Component {

    constructor(props) {
        super(props);
        this.idParam = window.location.href.split("conteudo_professor/")[1];
        this.service = new MaterialService();
        this.state = {
            material: {}
        }
    }

    async componentDidMount() {
        this.result = await this.service.findById(this.idParam);
        this.setState({material: this.result});
    }


    render() {

        return(
            <section className="container principal">
                <div className="bg-light rounded-pill p-3 m-5">
                    <h6>Publicado por: <strong>Graziela da Recode</strong></h6>
                    <p style={{fontSize: ".8rem"}}><em>04 de Agosto</em></p>
                </div>
                <div className="container">
                    <h2 className="title_font text-center fs-1">{this.state.material.titulo}</h2>
                    <figure>
                        <img className="p-3" src={`data:image/jpeg;base64,${this.state.material.imagemConteudo}`} width="100%"
                            alt="Imagem descritiva do conteúdo" />
                        <figcaption>Figura da imagem descritiva do conteúdo</figcaption>
                    </figure>
                    <article>
                        <p className="fs-5 mt-5">
                            {this.state.material.conteudo}
                        </p>
                    </article>
                </div>
            </section>
        );
    }
}

export default ApresentacaoConteudo;