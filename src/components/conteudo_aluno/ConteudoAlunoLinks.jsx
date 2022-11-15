import React from "react";

export default class ComentarioAlunoLinks extends React.Component{
    render(){
        return(
            <aside className="nav_lateral">
                <nav>
                    <div className="container mb-5 mt-5">
                        <h3 className="title_font fs-5 border-dark border-bottom">Postagens dos professores</h3>
                        <ul className="bg-light border border-1 rounded p-3" style={{listStyle: "none"}}>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Analisando O Pequeno Príncipe</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Narrativas descomplicadas</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Buscando o significado</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}></a>Construindo sua narrativa</li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Entendendo o contexto</a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <h3 className="title_font fs-5 border-dark border-bottom">Contos dos estudantes</h3>
                        <ul className="bg-light border border-1 rounded p-3" style={{listStyle: "none"}}>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>A volta dos que não foram</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Poeira em alto mar</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Era uma engraçada casa</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>O dia depois de ontem</a></li>
                            <li><a href="#" className="link-info" style={{textDecoration: "none"}}>Os dragões da montanha</a></li>
                        </ul>
                    </div>
                </nav>
            </aside>
        )
    }
}