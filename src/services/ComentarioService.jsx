import { BASE_URL, COMENTARIO_CONTO_EP, COMENTARIO_MATERIAL_EP } from './ApiURI';
import Service from './Service';


class ComentarioService extends Service {

    constructor(tipo) {
        super();
        this.uri = this.createUri(tipo);
    }
    async save(comentario) {
        return fetch(this.uri, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(comentario)
        })
        .then(res => {
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
            
            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o comentário: " + error.message);
        });
    }

    get list() {
        return fetch(this.uri)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
                
                return res.json()
            })
            .catch(error => {
                throw new Error("Houve um erro ao tentar recuperar a lista de comentários: " + error.message);
            });
    }

    createUri(tipo) {
        return tipo === "1" ? `${BASE_URL}${COMENTARIO_MATERIAL_EP}` : `${BASE_URL}${COMENTARIO_CONTO_EP}` ;
    }
}

export default ComentarioService;