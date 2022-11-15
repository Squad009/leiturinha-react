import CardConto from "./CardConto";
import TituloPerfilAluno from "./TituloPerfilAluno";
import {dataUltimasLeituras, dataRecomendados} from "../../shared/mockedData/dataContos";

export default function UltimasLeituras() {
    return(
        <>
            <TituloPerfilAluno titulo="Últimas Leituras" />
            <CardConto data={dataUltimasLeituras} />
            <TituloPerfilAluno titulo="Recomendações" />
            <CardConto data={dataRecomendados} />
        </>
    )
}