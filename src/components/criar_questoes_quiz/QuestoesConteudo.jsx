import { Component, } from 'react';

class QuestoesConteudo extends Component {


    render() {
        return (
            <>

                <section>
                    <h2 className="title_font" style={{textalign: "center"  }}>Questão 01</h2>
                    <div>
                        <section className="contorno">
                            <div className="container p-5">
                                <div className="row">
                                    <div className="col">
                                        <div className="mb-3">
                                            <label htmlFor="tituloPergunta" className="form-label title_font">Questão</label>
                                            <input type="text" className="form-control" id="tituloPergunta"
                                                placeholder="Escreva o enunciado da questão" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="alternativaA" className="form-label title_font">Alternativa "A"</label>
                                            <input type="text" className="form-control" id="alternativaA"
                                                placeholder="Escreva a alternativa" />

                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="temaDoQuiz" className="form-label title_font">Alternativa "B"</label>
                                            <input type="text" className="form-control" id="temaDoQuiz"
                                                placeholder="Escreva a alternativa" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="temaDoQuiz" className="form-label title_font">Alternativa "C"</label>
                                            <input type="text" className="form-control" id="temaDoQuiz"
                                                placeholder="Escreva a alternativa" />
                                        </div>

                                        <div className="mb-3">
                                            <label htmlFor="temaDoQuiz" className="form-label title_font">Alternativa "D"</label>
                                            <input type="text" className="form-control" id="temaDoQuiz"
                                                placeholder="Escreva a alternativa" />
                                        </div>
                                        <div className="mb-3">
                                            <label htmlFor="temaDoQuiz" className="form-label title_font">Alternativa "E"</label>
                                            <input type="text" className="form-control" id="temaDoQuiz"
                                                placeholder="Escreva a alternativa" />
                                        </div>
                                        <label htmlFor="temaDoQuiz" className="form-label title_font">Qual Alternativa Correta ?</label>
                                        <select className="form-select" aria-label="Default select example">
                                            <option value="A">Alternativa "A"</option>
                                            <option value="B">Alternativa "B"</option>
                                            <option value="C">Alternativa "C"</option>
                                            <option value="D">Alternativa "D"</option>
                                            <option value="E">Alternativa "E"</option>
                                        </select>
                                    </div>

                                </div>
                            </div>
                        </section>
                        <div className="irCriar">
                            <button type="button" className="btn button_app_primary"><a href="criarQuizz.html">Voltar</a> </button>
                            <button type="button" className="btn button_app_primary"><a href="#">Próxima</a> </button>
                            <button type="button" className="btn button_app_primary">Salvar</button>
                        </div>
                    </div>
             
                <hr className="border-primary border-3 opacity-75"/>
                </section>

            </>
        );
    }


}


export default QuestoesConteudo;