


class Conto  {
    
    constructor(titulo, conteudo, categoria, imagemCapa ) {
        this.titulo = titulo;
        this.conteudo = conteudo;
        this.categoria = this.setCategoria(categoria);
        this.imagemCapa = imagemCapa;
    }

    setCategoria(categoria) {
      let value;
      switch(categoria) {
          case "1": value = { id: 1, nome: "FANTASIA" }
           break;
          case "2": value = { id: 2, nome: "AVENTURA" };
           break;
          case "3": value = { id: 3, nome: "AÇÃO" };
      }
      return value;
    }
}

export default Conto;