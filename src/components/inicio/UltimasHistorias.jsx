import { Component } from 'react';
import ContoService from '../../services/ContoService';
import HistoriaItem from './HistoriaItem';



class UltimasHistorias extends Component {

    constructor(props) {
        super(props);
        this.service = new ContoService();
        this.state = {
            contos: []
        }
    }

    async componentDidMount() {
      this.result = await this.service.list;
      this.componentList = this.result.map(conto => <HistoriaItem key={conto.id} conto={conto} />);
      this.setState({ contos: this.componentList});
    }

    render() {

        return(
            <section>
                <h2 className="title_font ms-3 mt-5 text_app_secondary">Últimas historinhas adicionadas...</h2>
                <hr className="border-primary border-3 opacity-75" />
                <a href="#" className="text-link" style={{float: "right", marginRight: "2rem"}}>Mais...</a>
                <div className="album py-5 bg-light">
                    <div className="container">

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                            {this.state.contos}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default UltimasHistorias;