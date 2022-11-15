import AvaliacaoConto from "./AvaliacaoConto";

export default function CardUltimasLeituras({ data }) {

    return (
        <div className='ultimas-leituras row'>
            {data.map((item) => {
                return(
                    <div className='card col-3 cardLivros' key={item.idConto}>
                        <img src={item.imagem} alt={item.tituloConto} />
                        <h2 className="title_font">{item.tituloConto}</h2>
                        <p> Categoria: {item.categoria}</p>
                        <p> Autor: {item.estudante}</p>
                        <AvaliacaoConto />
                    </div>
                )
            })}
        </div>
    )
}