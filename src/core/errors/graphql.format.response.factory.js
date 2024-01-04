"use strict";
exports.__esModule = true;
exports.GraphQLFormatResponseFactory = void 0;
var GraphQLFormatResponseFactory = function (response) {
    return {
        data: response.data,
        errors: response.errors,
        extensions: response.extensions,
        http: response.http
    };
};
exports.GraphQLFormatResponseFactory = GraphQLFormatResponseFactory;
