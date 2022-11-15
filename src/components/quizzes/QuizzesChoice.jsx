import { Component,  } from 'react';

class QuizzesChoice extends Component {

   
    render() {
        return (
            <>
                                      
                    <section>
                      
                    <h2 className="title_font mt-5 align-items-center" >Escolha seu Quiz</h2>
              
                        <div className="escolha">
                            <div className="row">
                                <div className="col">
                                    <ul className="op-list">
                                        <li>
                                            <button className="op" type="button">
                                                <a href="/tela_realizar_quiz"> Quiz 01</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="op-list">
                                        <li>
                                            <button className="op" type="button">
                                                <a href="/tela_realizar_quiz"> Quiz 01</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="op-list">
                                        <li>
                                            <button className="op" type="button">
                                                <a href="/tela_realizar_quiz"> Quiz 01</a></button>
                                        </li>
                                    </ul>
                                </div>
                                <div className="col">
                                    <ul className="op-list">
                                        <li>
                                            <button className="op" type="button">
                                                <a href="/tela_realizar_quiz"> Quiz 01</a></button>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <hr className="border-primary border-3 opacity-75" />
                    </section>
               
            </>
        );
    }


}


export default QuizzesChoice;