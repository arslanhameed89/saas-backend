"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
exports.__esModule = true;
var ormconfig = require("./orm.config");
var path_1 = require("path");
module.exports = __assign(__assign({}, ormconfig), { entities: [path_1.join(__dirname, './modules/**/*.entity{.ts,.js}')], migrations: [path_1.join(__dirname, './migrations/tenanted/*{.ts,.js}')] });
