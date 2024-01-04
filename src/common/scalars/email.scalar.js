"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.EmailScalar = void 0;
var graphql_1 = require("@nestjs/graphql");
var graphql_2 = require("graphql");
var EmailScalar = /** @class */ (function () {
    function EmailScalar() {
        this.description = 'Email custom scalar type';
        this.emailRegex = new RegExp(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/);
    }
    EmailScalar.prototype.parseValue = function (value) {
        if (typeof value !== 'string') {
            throw new TypeError('Value is not string');
        }
        if (!this.emailRegex.test(value)) {
            throw new TypeError("Value is not a valid email address: " + value);
        }
        return value;
    };
    EmailScalar.prototype.serialize = function (value) {
        if (typeof value !== 'string') {
            throw new TypeError("Value is not string: " + value);
        }
        if (!this.emailRegex.test(value)) {
            throw new TypeError("Value is not a valid email address: " + value);
        }
        return value;
    };
    EmailScalar.prototype.parseLiteral = function (ast) {
        if (ast.kind !== graphql_2.Kind.STRING) {
            throw new graphql_2.GraphQLError("Can only validate strings as email addresses but got a: " + ast.kind);
        }
        if (!this.emailRegex.test(ast.value)) {
            throw new TypeError("Value is not a valid email address: " + ast.value);
        }
        return ast.value;
    };
    EmailScalar = __decorate([
        graphql_1.Scalar('Email')
    ], EmailScalar);
    return EmailScalar;
}());
exports.EmailScalar = EmailScalar;
