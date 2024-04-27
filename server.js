/** @format */
const express = require("express");
const cors = require("cors");
const charactersRoute = require("./routes/characters");
const characterRoute = require("./routes/character");
const episodesRoute = require("./routes/episodes");

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());

app.use("/api/characters", charactersRoute);
app.use("/api/characters", characterRoute);
app.use("/api/episodes", episodesRoute);

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
