const listBooks = (req, res) => {
    res.status(200).send('Books ok')
}

const createBooks = (req, res) => {
    res.status(200).json(req.body)
}

module.exports = { listBooks, createBooks }
