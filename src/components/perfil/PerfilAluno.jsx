import InfoAluno from "./InfoAluno";
import HeaderApp from "../../shared/HeaderApp";
import UltimasLeituras from "./UltimasLeituras";
import Footer from "../../shared/footer/Footer"
import NavigationMain from '../../shared/header/NavigationMain';

export default function PerfilAluno() {
    return(
        <>
            <HeaderApp navigationMain={<NavigationMain />} />
            <InfoAluno />
            <UltimasLeituras />
            <Footer />
        </>
    )
}