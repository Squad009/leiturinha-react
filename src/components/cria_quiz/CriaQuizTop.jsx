import { Component } from 'react';



class CriaQuizTop extends Component {

    render() {
        return(
            <section>
                    <h2 className="title_font" style={{textalign: "center"  }}>Bem vindo(a), Professor.</h2>
                    <section className="hTopo">
                        <img src={require('../img/imgHeaderCriarquiz.png')} width="100%"  alt="Imagens Livros formato desenho"/>
                    </section>
            </section>
        );
    }
}

export default CriaQuizTop;