import InfoAluno from "./InfoAluno";
import HeaderApp from "../../shared/HeaderApp";
import UltimasLeituras from "./UltimasLeituras";
import Footer from "../../shared/footer/Footer"

export default function PerfilAluno() {
    return(
        <>
            <HeaderApp />
            <InfoAluno />
            <UltimasLeituras />
            <Footer />
        </>
    )
}