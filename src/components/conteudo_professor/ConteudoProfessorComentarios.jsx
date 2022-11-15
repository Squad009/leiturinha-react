import { Component } from 'react';
import { TIPO_CONTEUDO_PROFESSOR } from '../../services/CONST';
import ComentarioForm from '../../shared/ComentarioForm';
import ComentarioLista from '../../shared/ComentarioLista';



class ConteudoProfessorComentarios extends Component{

    render() {

        return(
            <section className="comentarios">
                <div className="mb-3 d-flex flex-column mx-5">
                    <h2 className="p-3">Comentários do Conteúdo</h2>
                    <ComentarioForm tipo={ TIPO_CONTEUDO_PROFESSOR }/>
                </div>
                <ComentarioLista tipo={ TIPO_CONTEUDO_PROFESSOR } />
            </section>
        );
    }

}

export default ConteudoProfessorComentarios;