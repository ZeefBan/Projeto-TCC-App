const expres = require ('express');
const { User } = require('../migrations');
const router = express.Router();

router.get('/', (req, res, nex) => {
    User.findAll().then((users) => {
        res.status(200).json(users);
    }).catch((e) => {
        console.log(e.message);
        res.status(500).json({message: 'error'})
    })
});

module.exports =  router;
