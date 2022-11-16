import { BASE_URL, MATERIAIS_EP, MATERIAL_EP } from './ApiURI';
import Service from './Service';



class MaterialService extends Service {

    async save(material) {

        return  fetch(`${BASE_URL}${MATERIAIS_EP}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(material)
        })
        .then(res => {
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
            
            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o material " + error.message);
        });
    }

    get list() {
        return fetch(`${BASE_URL}${MATERIAIS_EP}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");

                return res.json();
            })
            .catch(error => {
                throw new Error("Houve um erro durante ao buscar a lista de materiais " + error.message);
            });
    }

    async findById(id) {
        if(id.includes("?")) id.replace("?", "");
        this.receivedId = Number.parseInt(id);
        return fetch(`${BASE_URL}${MATERIAIS_EP}/${MATERIAL_EP}?id=${this.receivedId}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, `Ops... não foi possível encontrar o caminho solicitado / status code: ${res.status}`);

                return res.json();
            })
            .catch(error => {
                throw new Error(`Ocorreu um erro ao tentar recuparar o material com o id: ${id} / error: ${error.message}`);
            })
    }
}

export default MaterialService;