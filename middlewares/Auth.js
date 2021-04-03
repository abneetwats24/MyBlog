const jwt = require("jsonwebtoken");

const { ErrorHandler } = require("./../helpers/error");

module.exports = async (req, res, next) => {
    try {
        const authHeader = req.get("Authorization");

        if (!authHeader) throw new ErrorHandler(401, "Access Denied!");

        const token = authHeader.split(" ")[1];
        let decodedToken;
        try {
            decodedToken = jwt.verify(token, process.env.CLIENT_SECRET);
        } catch (err) {
            throw new ErrorHandler(401, "Some Problems with JWT");
        }

        if (!decodedToken) {
            throw new ErrorHandler(401, "Access Denied!");
        }

        req.userId = decodedToken.userId;
        next();
    } catch (error) {
        next(error);
    }
};
