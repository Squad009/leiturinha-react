import React from "react";
import Authentication from '../../shared/header/Authentication';
import NavigationMain from '../../shared/header/NavigationMain';
import SearchMain from '../../shared/header/SearchMain';
import HeaderApp from '../../shared/HeaderApp';
import Footer from "../../shared/footer/Footer";
import SobreConteudo from "./SobreConteudo";

export default function SobreMain(){
    return(
        <div>
        <HeaderApp navigationMain={<NavigationMain />} searchMain={<SearchMain />} authentication={<Authentication />} />
        <SobreConteudo/>
        <Footer/>
        </div>
    )
}