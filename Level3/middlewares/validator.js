const validate = (schema) => async(req, res, next) =>{
    try {
        const body = req.body;
        await schema.validate(body);
        next();
    } catch (error) {
        return res.status(404).send(error.message);
    }
}

module.exports = validate;