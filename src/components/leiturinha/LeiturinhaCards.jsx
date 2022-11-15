const card=[
    {
        id: 1,
        titulo:"A princesa e o sapo",
        texto:"Há muito, muito tempo havia uma princesa que vivia num reino muito distante. Esta princesa era muito bonita, com uns cabelos loiros ..."
    },
    {
        id: 2,
        titulo:"O mágico de OZ",
        texto:"Dorothy e seu cachorro Totó são levados para a terra mágica de Oz quando um ciclone passa pela fazenda de seus avós no Kansas..."
    },
    {
        id: 3,
        titulo:"O menino que aprendeu a ver",
        texto:"Em “O menino que aprendeu a voar”, Janine apresenta a história de um menino que não aceitava sua aparência por causa de cicatrizes ..."
    },
    {
        id: 4,
        titulo:"Diário de um banana",
        texto:"A escola não é uma experiência agradável para o quase adolescente Greg Heffley, mas sim um campo minado que ele precisa enfrentar..."
    }
];

function Item(props){
    const indice = props.indice;
    const item = card[indice];

    return(
        <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src="..." id="imgCard" className="img-fluid rounded-start responsive-img" alt="..."/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title title_font">{item.titulo}</h5>
                    <p className="card-text">{item.texto}</p>
                    <p className="card-text"><small className="text-muted">Leia mais</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
    )
}

export default function LeiturinhaCards(){
    return(
        <div className="leiturinhaCards">
            <div className="row row-cols-lg-2 row-cols-md-1 g-2">
                {card.map((item,index) => (
                    <Item indice = {index} key = {index}/>
                ))}
            </div>
        </div>
    )
}