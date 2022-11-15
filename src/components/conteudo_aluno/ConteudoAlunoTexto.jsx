import React from "react";
import ContoService from "../../services/ContoService";

export default class ConteudoAlunoTexto extends React.Component{

    constructor(props) {
        super(props);
        this.idParam = window.location.href.split("conteudo_aluno/")[1];
        this.service = new ContoService();
        this.state =  {
            conto: {}
        }
    }

    async componentDidMount() {
        this.result =  await this.service.findById(this.idParam);
        this.setState({ conto: this.result })
        console.log("CONTO", this.state.conto);
            
    }

    render(){
        return(
            <section className="container principal">
            
                    <div className="informacao_conto bg-light p-3 m-5">
                        <div>
                            <h6>Publicado por: <strong>Letícia da E M Luiz Gatti</strong></h6>
                            <p style={{fontSize: ".8rem"}}><em>26 de Setembro</em></p>
                        </div>
                        <div className="btnCurtir">
                            <button className="btn btn-primary">Curtir ♥</button>
                        </div>                
                    </div>

                    <div className="container">
                        <h2 className="title_font text-center">{this.state.conto.titulo}</h2>
                        <figure>
                            <img className="p-3" src={`data:image/jpeg;base64,${this.state.conto.imagemCapa}`} width="100%"
                                alt="Imagem descritiva do conteúdo"/>
                            <figcaption>Figura da imagem descritiva do conteúdo</figcaption>
                        </figure>
                        <article>
                            <p className="fs-5 mt-5">
                                {this.state.conto.conteudo}
                            </p>
                        </article>
                    </div>
                    
            </section>
        )
    }
}