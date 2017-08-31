const Link = require('../models/Link')

let getAll = (req, res) => {
  Link.find((err, links) => {
    if(err) throw res.status(500).send(err)
    res.send(links)
  })
}

module.exports = {
  getAll
};
