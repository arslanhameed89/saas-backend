"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
exports.CreateUserDto = void 0;
var class_validator_1 = require("class-validator");
var graphql_1 = require("@nestjs/graphql");
var CreateUserDto = /** @class */ (function () {
    function CreateUserDto() {
    }
    __decorate([
        graphql_1.Field(),
        class_validator_1.MinLength(10),
        class_validator_1.IsString(),
        class_validator_1.IsNotEmpty()
    ], CreateUserDto.prototype, "name");
    __decorate([
        graphql_1.Field(),
        class_validator_1.Length(30, 500)
    ], CreateUserDto.prototype, "email");
    CreateUserDto = __decorate([
        graphql_1.InputType()
    ], CreateUserDto);
    return CreateUserDto;
}());
exports.CreateUserDto = CreateUserDto;
