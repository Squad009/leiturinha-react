import { Component } from 'react';
import RealizaQuizConteudo from './RealizaQuizConteudo';
import '../../css/quizStyle.css';


import RealizaQuizBottom from './RealizaQuizBottom';

class RealizaQuizMain extends Component {

    render() {

        return(
          <main>
              <RealizaQuizConteudo/>
              <RealizaQuizBottom />
          </main>
          
        );
    }
}

export default RealizaQuizMain;