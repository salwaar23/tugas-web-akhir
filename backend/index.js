import express from "express";
import cors from "cors";
import db from "./config/Database.js";
import UserRoute from "./routes/UserRoute.js";
import WargaRoute from "./routes/WargaRoute.js";
import AuthRoute from "./routes/AuthRoute.js";
import DatangRoute from "./routes/DatangRoute.js";
import KematianRoute from "./routes/KematianRoute.js";
import KKRoute from "./routes/KKRoute.js";
import LahirRoute from "./routes/LahirRoute.js";
import PengaduanRoute from "./routes/PengaduanRoute.js";
import SuratRoute from "./routes/SuratRoute.js";

const app = express();

(async() => {
  await db.sync();
})();

app.use(cors());

app.use(express.json());
app.use(UserRoute);
app.use(WargaRoute);
app.use(AuthRoute);
app.use(DatangRoute);
app.use(KematianRoute);
app.use(KKRoute);
app.use(SuratRoute);
app.use(LahirRoute);
app.use(PengaduanRoute);

app.listen(5000, () => {
  console.log('server up and running ...');
});
