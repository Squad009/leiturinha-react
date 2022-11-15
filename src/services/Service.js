


class Service {

    isFailure = (response) => {
        if(!response.ok && response.status !== 404) throw new Error(`Erro ao tentar realizar a requisição: ${response.status}`);
    }
    
    isNotFound = (response, msg) => {
        if(response.status === 404) throw new Error(msg);
    }
}

export default Service;