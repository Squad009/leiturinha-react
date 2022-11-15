import React from "react";
import ConteudoAlunoComentarios from "./ConteudoAlunoComentarios";
import ConteudoAlunoTexto from "./ConteudoAlunoTexto";
import ConteudoAlunoLinks from "./ConteudoAlunoLinks";
import "../../css/pagina_conto.css";

export default class ConteudoAlunoMain extends React.Component{
    render(){
        return(
            <main class="grid_conteudo_conto p-3">
                <ConteudoAlunoTexto/>
                <ConteudoAlunoComentarios/>
                <ConteudoAlunoLinks/>
            </main>
        )
    }
}