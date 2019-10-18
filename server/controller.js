module.exports = {
    getHouses: (req, res) => {
        const db = req.app.get('db');

        db.get_houses()
        .then(dbResponse => {
            res.status(200).send(dbResponse)
        })
        .catch(err => {
            console.log(err)
        })
    }, 

    postNewHouse: (req, res) => {
        const db = req.app.get('db');
        console.log(req.body)

        const {name, address, city, state, zip} = req.body;

        db.post_new_house([name, address, city, state, zip])
        .then(response => {
            res.status(200).send(response)
        })
        .catch(err => {
            console.log(err)
        })
    }, 

    deleteHouse: (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params

        db.delete_house(id)
        .then(dbResponse => {
            res.status(200).send(dbResponse)
        })
        .catch(err => {
            console.log(err)
        })
    }
}