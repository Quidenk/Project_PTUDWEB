exports.create = (req, res) => {
    res.send({ messsge: "create handler" });
};

exports.findAll = (req, res) => {
    res.send({ messsge: "findOne handler" });
};

exports.findOne = (req, res) => {
    res.send({ messsge: "findOne handler" });
};

exports.update = (req, res) => {
    res.send({ messsge: "update handler" });
};

exports.deleteOne = (req, res) => {
    res.send({ message: "deleteOne handler" });
};

exports.deleteAll = (req, res) => {
    res.send({ message: "deleteAll handler" });
};

exports.findAllFavorite = (req, res) => {
    res.send({ message: "findAllFavorite handler" });
};