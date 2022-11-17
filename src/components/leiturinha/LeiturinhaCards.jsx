import { Component } from 'react';
import ContoService from '../../services/ContoService';
import LeiturinhaItem from './LeiturinhaItem';


class LeiturinhaCards extends Component{

    constructor(props) {
        super(props);
        this.service = new ContoService();
        this.state = {
            contos: []
        }
    }

    async componentDidMount() {
        this.result = await this.service.findByCategoria(this.props.tipoCategoria);
        this.componentList = this.result.map(conto => <LeiturinhaItem key={conto.id} conto={conto} />);
        this.setState({
            contos: this.componentList
        })
    }
    render() {


        return(
            <div className="leiturinhaCards">
                <div className="row row-cols-lg-2 row-cols-md-1 g-2">
                    {this.state.contos}
                </div>
            </div>
        )
    }
}

export default LeiturinhaCards;