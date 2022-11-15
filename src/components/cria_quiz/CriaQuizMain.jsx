import { Component } from 'react';
import CriaQuizTop from './CriaQuizTop';
import '../../css/criarQuiz.css'
import CriaQuizForm from './CriaQuizForm';


class CriaQuizMain extends Component {

    render() {

        return(
          <main>
              <CriaQuizTop />
              <CriaQuizForm />
          </main>
          
        );
    }
}

export default CriaQuizMain;