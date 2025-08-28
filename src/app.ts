import express from "express";
import connectDB from "./database";
import postsRoutes from "./api/posts/posts.routes";
import { notFoundHandler } from "./middlewares/notFound.middleware";
import { errorHandler } from "./middlewares/errorHandler.middleware";
import morgan from "morgan";
import cors from "cors";
import path from "path";
const app = express();
const PORT = 8000;
connectDB();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());
app.use("/media", express.static(path.join(__dirname, "../media")));
app.use("/posts", postsRoutes);
app.use(errorHandler);
app.use(notFoundHandler);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
