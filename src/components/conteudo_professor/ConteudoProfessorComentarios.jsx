import { Component } from 'react';



class ConteudoProfessorComentarios extends Component{

    render() {

        return(
            <section className="comentarios">
                <div className="d-flex justify-content-between mb-3">
                    <h2 className="p-3">Comentários do Conteúdo</h2>
                    <button className="btn button_app_secondary m-3">Comentar</button>
                </div>
                <div className="ms-5">
                    <h5><strong>João da Silva:</strong></h5>
                    <p className="ms-3 p-2 bg-light border border-2 rounded">
                        Rem reiciendis voluptates est nesciunt quod est quidem dolorem et itaque eveniet et ratione
                        laboriosam! Nam nesciunt sunt aut quis nisi qui incidunt enim ut quam libero et consequuntur
                        minima vel internos saepe et placeat iure. Cum neque ducimus eum consectetur asperiores aut
                        consequatur sunt sed quae cumque et quae illum est atque dolore. Qui odio dolorem et omnis
                        excepturi est repudiandae porro qui autem nulla aut fugit nihil.
                    </p>
                </div>
                <div className="ms-5">
                    <h5><strong>Pedro Maia:</strong></h5>
                    <p className="ms-3 p-2 bg-light border border-2 rounded">
                        Rem reiciendis voluptates est nesciunt quod est quidem dolorem et itaque eveniet et ratione
                        laboriosam! Nam nesciunt sunt aut quis nisi qui incidunt enim ut quam libero et consequuntur
                        minima vel internos saepe et placeat iure. Cum neque ducimus eum consectetur asperiores aut
                        consequatur sunt sed quae cumque et quae illum est atque dolore. Qui odio dolorem et omnis
                        excepturi est repudiandae porro qui autem nulla aut fugit nihil.
                    </p>
                </div>
                <div className="ms-5">
                    <h5><strong>Maria da Penha:</strong></h5>
                    <p className="ms-3 p-2 bg-light border border-2 rounded">
                        Rem reiciendis voluptates est nesciunt quod est quidem dolorem et itaque eveniet et ratione
                        laboriosam! Nam nesciunt sunt aut quis nisi qui incidunt enim ut quam libero et consequuntur
                        minima vel internos saepe et placeat iure. Cum neque ducimus eum consectetur asperiores aut
                        consequatur sunt sed quae cumque et quae illum est atque dolore. Qui odio dolorem et omnis
                        excepturi est repudiandae porro qui autem nulla aut fugit nihil.
                    </p>
                </div>
                <div className="ms-5">
                    <h5><strong>Dilma Rousseff:</strong></h5>
                    <p className="ms-3 p-2 bg-light border border-2 rounded">
                        Rem reiciendis voluptates est nesciunt quod est quidem dolorem et itaque eveniet et ratione
                        laboriosam! Nam nesciunt sunt aut quis nisi qui incidunt enim ut quam libero et consequuntur
                        minima vel internos saepe et placeat iure.
                    </p>
                </div>
            </section>
        );
    }

}

export default ConteudoProfessorComentarios;