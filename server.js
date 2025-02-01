import { app } from "./app.js";
import { connectDB } from "./config/db.js";

connectDB()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`⚙️  Server is running at port ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error("Error, couldn't start the server", error);
  });