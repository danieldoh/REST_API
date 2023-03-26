const functions = require("firebase-functions");
const express = require("express");
const router = express.Router();

const auth = require("./auth");

// auth function
exports.auth = auth.auth;

