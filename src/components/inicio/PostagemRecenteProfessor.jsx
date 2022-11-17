import { Component } from 'react';
import { Link } from 'react-router-dom';
import MaterialService from '../../services/MaterialService';
import PostagemProfessorItem from './PostagemProfessorItem';



class PostagemRecenteProfessor extends Component {

    constructor(props) {
        super(props);
        this.service = new MaterialService();
        this.state = {
            materiais: []
        }
    }

    async componentDidMount() {
        this.result = await this.service.list;
        this.componentList = this.result.map(material => <PostagemProfessorItem key={material.id} material={material} />);
        this.setState({materiais: this.componentList});
    }
    render() {
        return(
        <section>
            <hr className="border-primary border-3 opacity-75" />
            <h2 className="title_font ms-3 mt-5 text_app_secondary fs-2">Conteúdo de professores mais recentes...</h2>
            <Link to="conteudo-professor" className="text-link" style={{float: "right", marginRight: "2rem"}}>Mais...</Link>
            <div className="bg-light py-5">
                <div className="container">
                    <div className="row justify-content-sm-around">

                        {this.state.materiais}
                        
                    </div>    
                </div>
            </div>
        </section>
        );
    }
}

export default PostagemRecenteProfessor;