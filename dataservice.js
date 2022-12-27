const db = require('./db')

const getProduct = () => {
    return db.Product.find()
        .then((result) => {
            console.log(result);
            return result
        })
}
const getMenProduct = () => {
    return db.Menproduct.find()
        .then((result) => {
            return result
        })
}
const getWomenProduct = () => {
    return db.Womenproduct.find()
        .then((result) => {
            return result
        })
}
const viewProduct = (id) => {
    return db.Product.findOne({
        id
    })
        .then((result) => {
            console.log('id', result);

            return result

        })
}

module.exports = {
    getProduct,
    getMenProduct,
    getWomenProduct,
    viewProduct, 
}