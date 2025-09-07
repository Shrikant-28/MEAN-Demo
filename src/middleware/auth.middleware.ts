import { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

interface Decoded {
  id: string;
  iat: number;
  exp: number;
}

export const protect = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (authHeader?.startsWith("Bearer ")) {
    const token = authHeader.split(" ")[1];
    try {
      const decoded = jwt.verify(token, process.env.JWT_SECRET!) as Decoded;
      (req as any).user = { id: decoded.id };
      return next();
    } catch (err) {
      return res.status(401).json({ message: "Not authorized" });
    }
  }

  res.status(401).json({ message: "No token provided" });
};
