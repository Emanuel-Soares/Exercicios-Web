const url = 'http://files.cod3r.com.br/curso-js/funcionarios.json'
const axios = require('axios')

const mulheres = f => f.genero === 'F'
const chineses = f => f.pais === 'China'
const menorSalario = (func, funcAtual) => func.salario < funcAtual.salario ? func : funcAtual

axios.get(url).then(response => {
    const funcionarios = response.data
    // console.log(funcionarios)
    console.log(funcionarios.filter(mulheres).filter(chineses).reduce(menorSalario))
})