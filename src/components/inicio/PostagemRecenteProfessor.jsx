import { Component } from 'react';
import { Link } from 'react-router-dom';



class PostagemRecenteProfessor extends Component {

    render() {
        return(
        <section>
            <h2 className="title_font ms-3 mt-5 text_app_secondary">Conteúdo de professores mais recentes...</h2>
            <hr className="border-primary border-3 opacity-75" />
            <Link to="conteudo-professor" className="text-link" style={{float: "right", marginRight: "2rem"}}>Mais...</Link>
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-sm-around">

                        <div className="card col-md-5 mb-5" style={{maxWidth: 540}}>
                            <div className="row g-0">
                                <div className="col-md-3" style={{height: 200}}>
                                    <img src="img/extraordinario.jpg" height="100%" width="100%" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Compreensão de texto</h5>
                                        <p className="card-text">Um estudo mais aprofundado sobre o tema.</p>
                                        <Link to="conteudo_professor" className="btn button_app_secondary" role="button"
                                            style={{padding: ".5rem!important", margin: "auto"}}>Acessar</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-md-5 mb-5" style={{maxWidth: 540}}>
                            <div className="row g-0">
                                <div className="col-md-3" style={{height: 200}}>
                                    <img src="img/coraline.jpg" height="100%" width="100%"
                                        alt="Capa de livro com desenho de uma menina" />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Compreensão de texto</h5>
                                        <p className="card-text">Um estudo mais aprofundado sobre o tema.</p>
                                        <a href="vazio" className="btn button_app_secondary" role="button"
                                            style={{padding: ".5rem!important", margin: "auto"}}>Acessar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row justify-content-sm-around">
                        <div className="card col-md-5 mb-5" style={{maxWidth: 540}}>
                            <div className="row g-0">
                                <div className="col-md-3" style={{height: 200}}>
                                    <img src="img/amoras.jpg" height="100%" width="100%" alt="Desenho de um menino" />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Interpretando</h5>
                                        <p className="card-text">Como fazer interpretação de texto.</p>
                                        <a href="vazio" className="btn button_app_secondary" role="button"
                                            style={{padding: ".5rem!important", margin: "auto"}}>Acessar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card col-md-5 mb-5" style={{maxWidth: 540}}>
                            <div className="row g-0">
                                <div className="col-md-3" style={{height: 200}}>
                                    <img src="img/colchaderetalhos.jpg" height="100%" width="100%" alt="..." />
                                </div>
                                <div className="col-md-7">
                                    <div className="card-body">
                                        <h5 className="card-title">Interpretando</h5>
                                        <p className="card-text">Como fazer interpretação de texto.</p>
                                        <a href="vazio" className="btn button_app_secondary" role="button"
                                            style={{padding: ".5rem!important", margin: "auto"}}>Acessar</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        );
    }
}

export default PostagemRecenteProfessor;