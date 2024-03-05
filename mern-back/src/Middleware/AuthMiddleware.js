import jwt from "jsonwebtoken"

export const verify = function (roles) {
  return function (req, res, next) {
    // try {
    //   let token = req.headers.authorization
    //   if (!token) {
    //     res.status(403).send("You don't have token")
    //   }
    //   if (!token.startsWith('Bearer')) {
    //     res.status(403).send("Token is not vaid")
    //   }
    //   token = token.slice(7)
    //   const decoded = jwt.verify(token, process.env.JWT_KEY)
    //   req.decoded = decoded
    //   if (!roles.includes(decoded.role)) {
    //     res.status(403).send("You don't have access")
    //   }
    //   next()
    // } catch (error) {
    //   res.send(error.message)
    // }
  }
}