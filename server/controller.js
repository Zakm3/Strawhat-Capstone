let strawhats = require('./db.json')
let globalID = 13

module.exports = {
    getStrawhats: (req, res) => {
    res.status(200).send(strawhats)
    },
    deleteStrawhat:(req, res) => {
        let index = strawhats.findIndex(elem => elem.id === +req.params.id)
        strawhats.splice(index, 1)
        res.status(200).send(strawhats)
    },
    createStrawhat: (req, res) => {
        const {name,bounty,bio,imageURL} = req.body;
    let newStrawhat = {
        id: globalID,
        name,
        bio,
        bounty: +bounty,
        imageURL 
    }
    strawhats.push(newStrawhat);
    globalID++;
    res.status(200).send(strawhats)

    }, updateBounty: (req, res) => {
        const {type} = req.body
        let index = strawhats.findIndex(elem => elem.id === +req.params.id)
        if(type === 'minus' && strawhats[index].bounty > 1){
            strawhats[index].bounty -= 3000000;
            res.status(200).send(strawhats)
        } else if(type === 'plus' && strawhats[index].bounty < 5000000000000){
            strawhats[index].bounty += 3000000;
            res.status(200).send(strawhats)
        } else {
            res.status(400).send('Invalid Bounty')
        }
    }
}