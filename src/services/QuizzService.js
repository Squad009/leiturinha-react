import { BASE_URL, QUIZZ_EP,QUIZZES_EP} from './ApiURI';
import Service from './Service';



class QuizzService extends Service {

    async save(quizz) {

        return  fetch(`${BASE_URL}${QUIZZES_EP}`, {
            method: "POST",
            headers: { "Content-Type": "application/json"},
            body: JSON.stringify(quizz)
        })
        .then(res => {
            this.isFailure(res);
            this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");
            
            return res.json();
        })
        .catch(error => {
            throw new Error("Houve um erro durante a tentativa de salvar o quizz " + error.message);
        });
    }

    get list() {
        return fetch(`${BASE_URL}${QUIZZES_EP}`)
            .then(res => {
                this.isFailure(res);
                this.isNotFound(res, "Ops... não foi possível encontrar o caminho solicitado");

                return res.json();
            })
            .catch(error => {
                throw new Error("Houve um erro durante ao buscar a lista de quizzes " + error.message);
            });
    }

    async findById(id) {
        return fetch(`${BASE_URL}${QUIZZES_EP}/${QUIZZ_EP}?id=${id}`)
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

export default QuizzService;