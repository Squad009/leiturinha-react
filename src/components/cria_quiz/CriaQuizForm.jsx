import { Component } from 'react';

class CriaQuizForm extends Component {

    constructor(props) {
        super(props);

        this.state = {
            inputImage: "",
            srcImage: ""
        }
    }
    render() {
        return (
            <>
            <section>

                    <section>
                    <h2 className="title_font" style={{textalign: "center"  }}>Defina o Quiz!</h2>
                        <div>
                            <section className="contorno">
                                <div className="container p-5">
                                    <div className="row">
                                        <div className="col">
                                            <div className="mb-3">
                                                <label htmlFor="tituloDoQuiz" className="form-label title_font">Titulo Do Quiz</label>
                                                <input type="text" className="form-control" id="tituloDoQuiz"
                                                    placeholder="como seu quiz vai ser chamado"/>
                                            </div>
                                            <label htmlFor="temaDoQuiz" className="form-label title_font">Escolha um tema?</label>
                                            <select className="form-select" aria-label="Default select example" >
                                                <option value="A">Iterpretação de texto</option>
                                                <option value="B">Ortografia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="irCriar">
                                        <button type="button" className="btn button_app_primary"> <a href="/criar_questoes_quiz">Próxima</a>
                                        </button>
                                    </div>
                                </div>
                            </section>
                        </div>
                        <hr className="border-primary border-3 opacity-75"/>
                    </section>
                
            </section>
            </>
        );
    }

}


export default CriaQuizForm;