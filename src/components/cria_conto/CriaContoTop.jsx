import { Component } from 'react';



class CriaContoTop extends Component {

    render() {
        return(
            <section>
                <div className="p-3 bg-light bg-opacity-10 border border-light border-start-0 rounded-end ">
                    <h2 className="title_font fs-1 text-center">Descubra até onde sua imaginação pode chegar...</h2>
                </div>
                <img className="card-img imagem_info" src="imagem-criativa-info.jpeg" alt="Desenho de mulher usando pincel" />
                <div className="p-3 bg-light bg-opacity-10 border border-light border-start-0 rounded-end ">
                    <h2 className="title_font text-center">Mergulhe em um mundo onde só você impôe os limites</h2>
                </div>
            </section>
        );
    }
}

export default CriaContoTop;