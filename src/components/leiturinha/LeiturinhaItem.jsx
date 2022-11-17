

function LeiturinhaItem(props) {

        return(
            <div className="col">
            <div className="card mb-3">
              <div className="row g-0">
                <div className="col-md-4">
                  <img src={`data:image/jpeg;base64,${props.conto.imagemCapa}`} id="imgCard" className="img-fluid rounded-start responsive-img" alt="Imagem do conto"/>
                </div>
                <div className="col-md-8">
                  <div className="card-body">
                    <h5 className="card-title title_font">{props.conto.titulo}</h5>
                    <p className="card-text">{props.conto.conteudo.substring(0, 30)}...</p>
                    <p className="card-text"><small className="text-muted">Leia mais</small></p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
}

export default LeiturinhaItem;