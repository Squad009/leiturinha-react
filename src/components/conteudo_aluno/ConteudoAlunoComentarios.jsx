import React from "react";
import { TIPO_CONTO } from '../../services/CONST';
import ComentarioForm from '../../shared/ComentarioForm';
import ComentarioLista from '../../shared/ComentarioLista';

export default class ConteudoAlunoComentarios extends React.Component{
    render(){
        return(
            <section className="comentarios">
                <div className="mb-3 d-flex flex-column mx-5">
                    <h2 className="p-3">Comentários do Conteúdo</h2>
                    <ComentarioForm tipo={ TIPO_CONTO }/>
                </div>
                <ComentarioLista tipo={ TIPO_CONTO } />
            </section>
        );
    }
}