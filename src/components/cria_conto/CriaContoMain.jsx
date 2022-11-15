import { Component } from 'react';
import CriaContoTop from './CriaContoTop';
import '../../css/criar_conto.css'
import CriaContoForm from './CriaContoForm';


class CriaContoMain extends Component {

    render() {

        return(
          <main>
              <CriaContoTop />
              <CriaContoForm />
          </main>
          
        );
    }
}

export default CriaContoMain;