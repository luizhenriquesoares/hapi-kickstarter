
const getInfo = (req, res) => {

    let obj = {
        param1: req.params.token,
        param2: req.params.a
    }
    return obj
}

module.exports = { getInfo }