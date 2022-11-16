import Footer from '../../shared/footer/Footer';
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import HeaderApp from '../../shared/HeaderApp';
import "../../css/criarConteudoProfessor.css";
import { Component } from 'react';
import Material from '../../models/Material';
import MaterialService from '../../services/MaterialService';





export default class CriarConteudoProfessor extends Component {

    constructor(props) {
        super(props);
        this.service = new MaterialService();

        this.state = {
            inputImage: "",
            srcImage: "",
            inputTitulo: "",
            inputConteudo: "",
        }
    }

    render() {

            return(
                <>
                    <HeaderApp navigationMain={<NavigationMain />} authentication={<Authentication />}/>
                    <main>
                        
                        <h1 className="container-fluid p-5 bg-light text-center fs-1 fw-bold mb-5">Publicar conteúdo</h1>
                        <form onSubmit={e => this.salva(e)}>
                            <div className="selecao_imagem">
                                    <div>
                                        <img className="visualizacao_imagem" alt="Imagem do usuário" src={this.state.srcImage}/>
                                    </div>
                                    <div>
                                        <label htmlFor="formFileLg" className="form-label">Escolha uma imagem</label>
                                        <input className="form-control form-control-lg mb-3" id="formFileLg" type="file"  onChange={(e) => this.mostraImagem(e)} required/>
                                    </div>
                            </div>
                        
                            <div className="container d-flex  flex-column bd-highlight mb-1" id="caixaDeTexto">
                                    <div className="p-2 bd-highlight">
                                        <input type="text" id="titulo" placeholder="Seu título aqui..."  onChange={(e) => this.setState({inputTitulo: e.target.value})} required></input>
                                    </div>
                                    <div className="p-2 bd-highlight">
                                        <textarea className="p-2" id="texto" placeholder="Seu texto aqui..." onChange={(e) => this.setState({inputConteudo: e.target.value})} required></textarea>
                                    </div>
                                    <div>
                                    <button type="submit" className="btn button_app_primary mr-3"> Enviar </button>
                                    </div>
                            </div>
                        </form>
                    </main>

                    <Footer />
                </>
            );

    }

    salva(e) {
        e.preventDefault();

        this.material = new Material(this.state.inputTitulo, this.state.inputConteudo, this.state.inputImage);
        console.log("material", this.material);
        this.service.save(this.material)
            .then(res => {
                 alert("Seus dados foram salvos com sucesso");
                 window.open("http://localhost:3000/perfil_aluno", "_self");
            });
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
}