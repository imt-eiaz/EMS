import jwt from "jsonwebtoken";
import User from "../models/User";

const verifyUser = async (req, rest, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    if (!token) {
      return rest.status(404)({ success: false, error: "Token not provided" });
    }
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    if (!decoded) {
      return rest.status(404)({ success: false, error: "Token not provided" });
    }
    const user = await User.findById({ _id: decoded._id }).select("-password");

    if (!user) {
      return rest.status(404)({
        success: false,
        error: "User not found",
      });
    }

    req.user = user;
    next();
  } catch (error) {
    return rest.status(500)({ success: false, error: "Server side error" });
  }
};

export default verifyUser;
