
const getInfo = (req, res) => {
    console.log(res)

    let obj = {
        "todos" : 'dsd'
    }
    return obj
}

const teste = (req, res) => {
    console.log(res)

    let obj = {
        "teste" : 'teste'
    }
    return obj
}


module.exports = { getInfo, teste }