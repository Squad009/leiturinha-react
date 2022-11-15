import { Component } from 'react';
import { Link } from 'react-router-dom';



class InicioTop extends Component {

    render() {

        return(
            <>
                <section>
                    <img src="top-inicio.webp" width="100%" height="200px" alt="Desenhos de formas de nuvens e janelas" />
                </section>
                <section>
                    <h2 className="title_font ms-3 mt-5">Suas próprias histórias!!!</h2>
                    <div>
                        <img src="bg-nova-historia-inicio.webp" width="100%" height="100px"  alt="Imagem de fundo"/>
                        <Link to="criar_conto" type="button" className="btn button_app_primary animacao-bt ms-5">Quero criar minha
                            história</Link>
                    </div>
                </section>
            </>
        );

    }
}

export default InicioTop;