const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// TODO: Set cors origin based on the environment
app.use(cors());

app.use(bodyParser.json());
