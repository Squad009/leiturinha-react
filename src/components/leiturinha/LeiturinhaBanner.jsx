import React from "react";
import { Link } from "react-router-dom";

import "../../css/leiturinhas.css"

class LeiturinhaBanner extends React.Component{
    render(){
        return(
            <div className="banner">
                <div className="container banner-elements legenda">

                    <div>
                    <h2 className="title_font margem_titulo">Compartilhe e cresça!</h2>
                    <p>Faça parte dessa comunidade, descubra mundos incríveis a cada palavra lida e divida as suas histórias
                        também!
                    </p>
                    </div>

                    <div>
                    <Link to="criar_conto" className="btn button_app_primary mr-3"> Compartilhe sua história</Link>
                    </div>

                </div>
            </div>
        )
    }
}

export default LeiturinhaBanner;