import jwt from "jsonwebtoken";

export const auth = (req, res, next) => {
  //   console.log(req.headers);
  const token = req.headers.authorization.split(" ")[1];
  try {
    let userData;
    const isCustomAuth = token.length < 500;
    if (isCustomAuth && token) {
      userData = jwt.verify(token, process.env.JWT_SECRET);
      req.userId = userData?.id;
    } else {
      userData = jwt.decode(token);
      req.userId = userData?.sub;
    }
    next();
  } catch (error) {
    console.log(`Error occured while authenticating in middleware:${error}`);
  }
};
