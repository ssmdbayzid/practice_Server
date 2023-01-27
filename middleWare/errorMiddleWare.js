const errorHandler = (err, req, res, next) => {
    const statusCode = res.statusCode ? res.statusCode : 5000;

    res.status(statusCode)

    res.json({
        message: err.message,
        stack: process.env.NODE_END === "prodection" ? null : err.stack,
    })
}


module.exports = {
    errorHandler
}