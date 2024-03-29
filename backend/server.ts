import express from "express";
import cors from "cors";

import authRoutes from "./src/Routes/authRoutes";
import transactionsRoutes from "./src/Routes/transactionsRoutes";

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/auth", authRoutes);
// app.post("/auth", (req, res) => {
//   console.log(req.body);
// });

app.use("/transactions", transactionsRoutes);

app.listen(3000, () => `server running on port 3000`);
