import { BASE_URL, ALUNO_EP, ALUNOS_EP } from "./ApiURI";
import Service from "./Service";

export default class CadastroAlunoService extends Service{
    async save(aluno){
        return fetch(`${BASE_URL}${ALUNO_EP}`,{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(aluno)
        })
        .then(res =>{
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");

            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o conto " + error.message);
        })
    }

    get list() {
        return fetch(`${BASE_URL}${ALUNO_EP}`)
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
        return fetch(`${BASE_URL}${ALUNOS_EP}/${ALUNO_EP}?id=${id}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, `Ops... não foi possível encontrar o caminho solicitado / status code: ${res.status}`);

                return res.json();
            })
            .catch(error => {
                throw new Error(`Ocorreu um erro ao tentar recuparar o conto com o id: ${id} / error: ${error.message}`);
            })
    }
}

