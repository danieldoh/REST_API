"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.helloWorld = void 0;
const functions = require("firebase-functions");
const express = require("express");
const router = express.Router();
const auth = require("./auth");
// auth function
exports.auth = auth.auth;

//# sourceMappingURL=index.js.map