import jwt, { VerifyErrors, JwtPayload } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

// type JWTRequest = {
//   userId: string;
// } & Request;

interface DecodedToken extends JwtPayload {
  userId?: string;
}

interface DecodedType {
  userId: string;
  iat: number;
  exp: number;
}

interface RequestWithUserId extends Request {
  userId?: string;
}

// interface RequestWithUserId extends ExpressRequest {
//   userId?: string;
// }

const secretKey = "carlos";

export function generateToken(userId: string) {
  const token = jwt.sign({ userId }, secretKey, {
    expiresIn: "5h",
  });
  return token;
}

export async function validateToken(
  req: RequestWithUserId,
  res: Response,
  next: NextFunction
) {
  if (!req.headers) {
    return;
  }
  const token: string = req.headers["authorization"]?.replace(
    "Bearer ",
    ""
  ) as string;

  jwt.verify(token, secretKey, (err, decoded) => {
    console.log("decoded: ", decoded);
    console.log("err: ", err);
    if (err)
      return res.status(403).json({ message: "Failed to authenticate token" });
    // if (req) {
    //   req.userId = decoded;
    //
    if (!decoded) {
      return;
    }

    // {
    //   userId: '14eb3a7e-5b28-4a36-9727-33978cf1b008',
    //   iat: 1704592770,
    //   exp: 1704610770

    const { userId } = decoded as DecodedType;

    req.body.userId = userId;
    next();
  });
}
