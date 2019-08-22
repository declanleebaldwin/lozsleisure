const express = require("express");
const nodemailer = require("nodemailer");
const validator = require("validator");
const xssFilters = require("xss-filters");

const app = express();

app.use(express.json());

app.get("/", function(req, res) {
  res.status(405).json({ error: "sorry!" });
});

app.post("/", function(req, res) {
  res.status(200).json({ message: 'pass' });
});

module.exports = {
  path: "/api/contact",
  handler: app
};
