import { Component } from 'react';
import Conto from '../../models/Conto';
import ContoService from '../../services/ContoService';

class CriaContoForm extends Component {
    
    constructor(props) {
        super(props);

        this.service = new ContoService();
        this.state = {
            inputImage: "",
            srcImage: "",
            inputTitulo: "",
            inputConteudo: "",
            inputCategoria: ""
        }
    }
    render() {
        return(
            <section>
            <div className="containter-fluid p-3 mb-5" style={{backgroundImage: "url('../img/fundo-criativo-criar-conto.webp')"}}>
                <div className="fundo_criativo">
                    <form className="container p-2"
                        encType="text/plain">
                        <div className="selecao_imagem">
                            <div>
                                <img className="visualizacao_imagem" alt="Imagem do usuário" src={this.state.srcImage}/>
                            </div>
                            <div>
                                <label htmlFor="formFileLg" className="form-label">Escolha uma imagem</label>
                                <input className="form-control form-control-lg mb-3" id="formFileLg" type="file"  onChange={e => this.mostraImagem(e)} />
                            </div>
                        </div>
                        <div className="mb-3">
                            <label htmlFor="titulo_conto" className="form-label rotulo_campo w-100 text-center my-4">Título do conto</label>
                            <input type="text" className="form-control form-control-lg"  onChange={(e) => this.setState({inputTitulo: e.target.value})}
                                id="titulo_conto" />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="conteudoFormControlTextarea" className="form-label rotulo_campo w-100 text-center my-4">Escreva sua
                                história
                                aqui</label>
                            <textarea className="form-control form-control-lg " onChange={(e) => this.setState({inputConteudo: e.target.value})}
                                id="conteudoFormControlTextarea1" rows="10"></textarea>
                        </div>
                        <select className="form-select form-select-lg mb-3 "  onChange={(e) => this.setState({inputCategoria: e.target.value})}
                            aria-label=".form-select-lg example">
                            <option defaultValue="Escolha">Escolha a categoria</option>
                            <option value="1">Fantasia</option>
                            <option value="2">Aventura</option>
                            <option value="3">Ação</option>
                        </select>
                        <input className="button_app_primary button_salvar" value="Publicar história" onClick={e => this.salvaConteudo(e)}
                            style={{float: "right"}} />
                    </form>
                </div>
            </div>
        </section>
        );
    }

    mostraImagem(e) {
        
        this.image = e.target.files.item(0);

        this.fr = new FileReader();
        this.fr.readAsDataURL(this.image);

        this.fr.onload = e => {
            let file = e.target.result.replace("data:", "").replace(/^.+,/, "");
            this.setState({ srcImage: `data:image/png;base64,${file}` });
            this.setState({ inputImage: file });
        }

    }

    salvaConteudo(e) {
        if(this.camposSaoValidos()) {
            this.conto = new Conto(this.state.inputTitulo, this.state.inputConteudo, this.state.inputCategoria, this.state.inputImage);
            console.log("conto", this.conto);
            this.service.save(this.conto)
                .then(res => {
                     alert("Seus dados foram salvos com sucesso");
                     window.open("http://localhost:3000/perfil_aluno", "_self");
                });
                    
        } else {
            alert("Todos os campos devem ser preenchidos");
        }
    }

    camposSaoValidos() {
        return this.state.inputTitulo.length > 0 && this.state.inputConteudo.length > 0 &&
        this.state.inputCategoria.length > 0 && this.state.inputImage.length > 0;
    }

}


export default CriaContoForm;