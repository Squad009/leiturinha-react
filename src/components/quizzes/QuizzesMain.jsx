import { Component } from 'react';
import QuizzesTop from './QuizzesTop';
import '../../css/quizEscolher.css';
import QuizzesChoice from './QuizzesChoice';


class QuizzesMain extends Component {

    render() {

        return(
          <main>
              <QuizzesTop />
              <QuizzesChoice />
          </main>
          
        );
    }
}

export default QuizzesMain;