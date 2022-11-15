import { Component } from 'react';
import '../../css/criarQuiz.css';
import QuestoesTop from './QuestoesTop';
import QuestoesConteudo from './QuestoesConteudo';


class QuestoesMain extends Component {

    render() {

        return(
          <main>
              <QuestoesTop />
              <QuestoesConteudo />
          </main>
          
        );
    }
}

export default QuestoesMain;