const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const routes = require("./routes");
const bodyParser = require("body-parser");
const app = express();
const PORT = 5000;

app.use(cors()); //avoid cors issue with front end
app.use(morgan("dev")); // logging
app.use(bodyParser.json());
app.use(routes);

app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
