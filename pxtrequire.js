"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/// <reference path="../node_modules/pxt-core/built/pxtlib.d.ts" />
var path = require("path");
exports.pxtCore = require("pxt-core");
// require.resolve() gives path to [pxt dir]/built/pxt.js, so move up twice to get pxt root dir
exports.pxtCoreDir = path.resolve(require.resolve("pxt-core"), "..", "..");