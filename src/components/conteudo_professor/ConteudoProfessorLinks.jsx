import { Component } from 'react';



class ConteudoProfessorLinks extends Component {

    render() {
        return(
            <aside className="nav_lateral">
            <nav>
                <div className="container mb-5 mt-5">
                    <h3 className="title_font fs-5 border-dark border-bottom">Postagens dos professores</h3>
                    <ul className="bg-light border border-1 rounded p-3" style={{listStyle: "none"}}>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Português ao pé da letra</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Compreenda de vez os textos</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Interpretação, a forma definitiva</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Buscando o significado</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Entendendo o contexto</a></li>
                    </ul>
                </div>
                <div className="container">
                    <h3 className="title_font fs-5 border-dark border-bottom">Contos dos estudantes</h3>
                    <ul className="bg-light border border-1 rounded p-3" style={{listStyle: "none"}}>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>A volta dos que não foram</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Poeira em alto mar</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Era uma engraçada casa</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>O dia depois de ontem</a></li>
                        <li><a href="vazio" className="link-info" style={{textDecoration: "none"}}>Os dragões da montanha</a></li>
                    </ul>
                </div>
            </nav>
        </aside>
        )
    }
}

export default ConteudoProfessorLinks;