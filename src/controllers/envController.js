const getEnv = (req, res) => {
    try {
        res.status(201).json(process.env)
    } catch(error) {
        console.error(error)
        res.status(500).send("Server Error")
    }
}

module.exports = {
    getEnv
}