import { Component } from 'react';

class RealizaQuizConteudo extends Component {


    render() {
        return (
            <>

                <section>
                    <div className="container " id="cor_fundo">

                        <div className="container-title">
                            <h1 className="title-quiz">Quiz!</h1>
                        </div>

                        <div className="quiz_container" id="quiz">
                            <div className="quiz-header">

                                <h2 id="question">Texto da Questão</h2>
                                <hr />
                                <ul className="quiz-list">
                                    <li>
                                        <input type="radio" name="answer" id="a" className="answer" />
                                        <label htmlFor="a" id="a_text">Answer</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer" id="b" className="answer" />
                                        <label htmlFor="b" id="b_text">Answer</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer" id="c" className="answer" />
                                        <label htmlFor="c" id="c_text">Answer</label>
                                    </li>

                                    <li>
                                        <input type="radio" name="answer" id="d" className="answer" />
                                        <label htmlFor="d" id="d_text">Answer</label>
                                    </li>
                                    <li>
                                        <input type="radio" name="answer" id="e" className="answer" />
                                        <label htmlFor="e" id="e_text">Answer</label>
                                    </li>

                                </ul>
                            </div>

                            <button id="submit">Confirmar</button>

                        </div>
                    </div>
                </section>

            </>
        );
    }


}


export default RealizaQuizConteudo;