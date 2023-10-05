const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const routes = require("./routes/routes.js");
const app = express();
const PORT = 3001;

app.use(morgan("dev"));
app.use(cors());
app.use(express.json());
app.use(routes);

app.listen(PORT || 8080, () => {
  console.log(`Server Running! 
  http://localhost:${PORT}`);
});
