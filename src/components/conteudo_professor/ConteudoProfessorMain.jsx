
import { Component } from 'react'
import ApresentacaoConteudo from './ApresentacaoConteudo';
import "../../css/conteudo_professor.css";
import ConteudoProfessorComentarios from './ConteudoProfessorComentarios';
import ConteudoProfessorLinks from './ConteudoProfessorLinks';


class ConteudoProfessorMain extends Component {

    render() {
        
        return(
            <main class="grid_conteudo_professor p-3">
                <ApresentacaoConteudo />
                <ConteudoProfessorComentarios />
                <ConteudoProfessorLinks />
            </main>
        );
    }
}

export default ConteudoProfessorMain;