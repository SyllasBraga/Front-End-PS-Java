const ConsumirApi = (filtros) => {
    const BASE_URL = 'http://localhost:8080/transferencias/'
    const URLS = ['conta?', 'nome-operador?', 'periodo?', 'nome-operador-periodo?']
    const PARAMS = ['id-conta=', 'nome-operador=', 'data-inicio=', 'data-fim=', 'page=']

    if (filtros['dataInicioValue'] && filtros['dataFimValue'] && filtros['nomeOperadorValue']) {
        return fetch(`${BASE_URL + URLS[3] + PARAMS[0] + filtros['contaValue'] +'&' + PARAMS[1] + filtros['nomeOperadorValue'] + '&' + PARAMS[2] + 
        filtros['dataInicioValue'] + '&' + PARAMS[3] + filtros['dataFimValue'] + '&' + PARAMS[4] + '0'}`, {
            method: "GET"
        })
    } else if(filtros['nomeOperadorValue']){
        return fetch(`${BASE_URL + URLS[1] + PARAMS[0] + filtros['contaValue'] +'&' + PARAMS[1] + filtros['nomeOperadorValue'] + '&' + PARAMS[4] + '0'}`, {
            method: "GET"
        })
    } else if(filtros['dataInicioValue'] && filtros['dataFimValue']) {
        return fetch(`${BASE_URL + URLS[2] + PARAMS[0] + filtros['contaValue'] +'&' + PARAMS[2] + filtros['dataInicioValue'] + '&' + PARAMS[3] + filtros['dataFimValue'] + '&' + PARAMS[4] + '0'}`, {
            method: "GET"
        })
    } else{
        return fetch(`${BASE_URL + URLS[0] + PARAMS[0] + filtros['contaValue'] +'&' + PARAMS[4] + '0'}`, {
            method: "GET"
        })
    }
}

export default ConsumirApi;