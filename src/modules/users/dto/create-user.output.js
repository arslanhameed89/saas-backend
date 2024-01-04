"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserOutput = void 0;
var graphql_1 = require("@nestjs/graphql");
var class_validator_1 = require("class-validator");
var CreateUserOutput = /** @class */ (function () {
    function CreateUserOutput() {
    }
    __decorate([
        graphql_1.Field(),
        class_validator_1.MinLength(10)
    ], CreateUserOutput.prototype, "name");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(30, 500)
    ], CreateUserOutput.prototype, "email");
    CreateUserOutput = __decorate([
        graphql_1.ObjectType()
    ], CreateUserOutput);
    return CreateUserOutput;
}());
exports.CreateUserOutput = CreateUserOutput;
