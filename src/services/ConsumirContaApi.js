const ConsumirContaApi = () =>{
    return fetch("http://localhost:8080/contas", {
        method: 'GET'
    })
}

export default ConsumirContaApi