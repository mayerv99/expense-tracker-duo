import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface DecodedType {
  userId: string;
  iat: number;
  exp: number;
}

interface RequestWithUserId extends Request {
  userId?: string;
}

// TODO: Secret key must be in .env file
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
  // Clean the token
  const token: string = req.headers["authorization"]?.replace(
    "Bearer ",
    ""
  ) as string;

  jwt.verify(token, secretKey, (err, decoded) => {
    if (err)
      return res.status(403).json({ message: "Failed to authenticate token" });

    if (!decoded) {
      return;
    }
    // Set the userId in the req body for the next function be able to use it
    const { userId } = decoded as DecodedType;

    req.body.userId = userId;
    next();
  });
}
