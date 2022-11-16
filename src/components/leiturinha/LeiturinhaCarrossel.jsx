const carrossel = [
    {
        id: 1,
        tituloCarrossel: "Top 5 - Aventura",
        livro1:"Meu pé de laranja lima",
        autor1:"José Mauro de Vasconcelos",
        livro2:"Amoras",
        autor2:"Emicida",
        livro3:"Da minha janela",
        autor3:"Otávio Júnior",
        livro4:"O menino que tinha medo de errar",
        autor4:"Andrea Viviana Taubman",
        livro5:"A colcha de retalhos",
        autor5:"Conceil Corrêa da Silva e Nye Ribeiro Silva",
        legenda:"Confira as 5 leituras nacionais mais amadas do nosso site."
    },
    {
        id: 2,
        tituloCarrossel: "Top 5 - Fantasia",
        livro1:"O pequeno príncipe",
        autor1:"Antoine de Saint-Exupéry",
        livro2:"Coraline",
        autor2:"Neil Gaiman",
        livro3:"Alice no país das maravilhas",
        autor3:"Lewis Carroll",
        livro4:"Harry Potter e a pedra filosofal",
        autor4:"J. K. Rowling",
        livro5:"Extraordinário",
        autor5:"R. J. Palacio",
        legenda:"Confira as 5 leituras internacionais mais amadas do nosso site."
     }
]

function Item(props){
    const indice = props.indice;
    const item = carrossel [indice];

    return(
        <div className="container">
            <h4 className="titulo-top-nacional title_font margem_titulo">{item.tituloCarrossel}</h4>
            <div className="card">
                <div id="carroselNacional" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carroselNacional" data-bs-slide-to="0" className="active"
                    aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carroselNacional" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carroselNacional" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
                    <button type="button" data-bs-target="#carroselNacional" data-bs-slide-to="3"
                    aria-label="Slide 4"></button>
                    <button type="button" data-bs-target="#carroselNacional" data-bs-slide-to="4"
                    aria-label="Slide 5"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img src="..." className="d-block w-100 carousel-posicao-imagem" alt="..."/>
                    <div className="carousel-caption d-none d-md-block legenda-carrossel bg-legenda-nacional">
                        <h5>{item.livro1}</h5>
                        <p>{item.autor1}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./img/amoras.jpg" className="d-block w-100 carousel-posicao-imagem" alt="..."/>
                    <div className="carousel-caption d-none d-md-block legenda-carrossel bg-legenda-nacional">
                        <h5>{item.livro2}</h5>
                        <p>{item.autor2}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./img/daminhajanela.jpg" className="d-block w-100 carousel-posicao-imagem" alt="..."/>
                    <div className="carousel-caption d-none d-md-block legenda-carrossel bg-legenda-nacional">
                        <h5>{item.livro3}</h5>
                        <p>{item.autor3}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./img/meninotinhamedodeerrar.jpg" className="d-block w-100 carousel-posicao-imagem" alt="..."/>
                    <div className="carousel-caption d-none d-md-block legenda-carrossel bg-legenda-nacional">
                        <h5>{item.livro4}</h5>
                        <p>{item.autor4}</p>
                    </div>
                    </div>
                    <div className="carousel-item">
                    <img src="./img/colchaderetalhos.jpg" className="d-block w-100 carousel-posicao-imagem" alt="..."/>
                    <div className="carousel-caption d-none d-md-block legenda-carrossel bg-legenda-nacional">
                        <h5>{item.livro5}</h5>
                        <p>{item.autor5}</p>
                    </div>
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carroselNacional"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carroselNacional"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
                </div>
                <div className="card-body">
                <p className="card-text">{item.legenda}</p>
                </div>
            </div>
        </div>
    )
}

export default function LeiturinhaCarrossel() {
    return (
      <div className="carrossel">
              <div className="row row-cols-lg-2 row-cols-md-1 g-2">
                  {carrossel.map((_item,index) => (
                      <Item indice = {index} key = {index}/>
                  ))}
              </div>
          </div>
  
    )
  }