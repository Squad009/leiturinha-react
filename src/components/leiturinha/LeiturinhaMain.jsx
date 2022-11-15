import React from "react";
import Footer from "../../shared/footer/Footer";

import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import SearchMain from '../../shared/header/SearchMain';
import HeaderApp from '../../shared/HeaderApp';
import LeiturinhaBanner from "./LeiturinhaBanner";
import LeiturinhaCards from "./LeiturinhaCards";
import LeiturinhaCarrossel from "./LeiturinhaCarrossel";

export default function LeiturinhaMain(){
    return(
        <div>
            <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />
            <LeiturinhaBanner/>
            <div className="container">
                <h4 className="titulo-mais-lidas title_font margem_titulo">As mais lidas da semana</h4>
                <LeiturinhaCards/>
            </div>
            <div className="container">
                <LeiturinhaCarrossel />

            </div>
            <Footer/>
        </div>
    )
}

