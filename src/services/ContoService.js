import { BASE_URL, CATEGORIA_EP, CONTOS_EP, CONTO_EP } from './ApiURI';
import Service from './Service';



class ContoService extends Service {

    async save(conto) {

        return  fetch(`${BASE_URL}${CONTOS_EP}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(conto)
        })
        .then(res => {
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
            
            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o conto " + error.message);
        });
    }

    get list() {
        return fetch(`${BASE_URL}${CONTOS_EP}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");

                return res.json();
            })
            .catch(error => {
                throw new Error("Houve um erro durante ao buscar a lista de contos " + error.message);
            });
    }

    async findById(id) {
        if(id.includes("?")) id.replace("?", "");
        this.receivedId = Number.parseInt(id);
        return fetch(`${BASE_URL}${CONTOS_EP}/${CONTO_EP}?id=${this.receivedId}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, `Ops... não foi possível encontrar o caminho solicitado / status code: ${res.status}`);

                return res.json();
            })
            .catch(error => {
                throw new Error(`Ocorreu um erro ao tentar recuparar o conto com o id: ${id} / error: ${error.message}`);
            })
    }

    async findByCategoria(categoriaId) {
          
        return fetch(`${BASE_URL}${CONTOS_EP}/${CATEGORIA_EP}?id_categoria=${categoriaId}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, `Ops... não foi possível encontrar o caminho solicitado / status code: ${res.status}`);

                return res.json();
            })
            .catch(error => {
                throw new Error(`Ocorreu um erro ao tentar recuparar o conto com o id da categoria: ${categoriaId} / error: ${error.message}`);
            })
    }

}

export default ContoService;