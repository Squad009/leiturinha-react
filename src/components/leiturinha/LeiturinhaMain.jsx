import React from "react";
import Footer from "../../shared/footer/Footer";

import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import SearchMain from '../../shared/header/SearchMain';
import HeaderApp from '../../shared/HeaderApp';
import LeiturinhaBanner from "./LeiturinhaBanner";
import LeiturinhaCards from "./LeiturinhaCards";


export default function LeiturinhaMain(){
    return(
        <div>
            <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />
            <LeiturinhaBanner/>
            <div className="container">
                <h4 className="titulo-mais-lidas title_font margem_titulo">Fantasia</h4>
                <LeiturinhaCards tipoCategoria={1}/>
            </div>
            <div className="container">
            <h4 className="titulo-mais-lidas title_font margem_titulo">Aventura</h4>
                <LeiturinhaCards tipoCategoria={2} />
            </div>
            <div className="container">
            <h4 className="titulo-mais-lidas title_font margem_titulo">Ação</h4>
                <LeiturinhaCards tipoCategoria={3} />
            </div>
            <Footer/>
        </div>
    )
}

