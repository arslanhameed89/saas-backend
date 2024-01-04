"use strict";
exports.__esModule = true;
exports.GraphQLFormatErrorFactory = exports.BaseMessage = void 0;
exports.BaseMessage = {
    ServerStartUp: 'Application Started on Port Number :: ',
    Error: 'Internal Server Error',
    Success: 'Success',
    RequestProcessed: 'Request Processed Successfully'
};
var GraphQLFormatErrorFactory = function (error) {
    var errorMessage;
    // if (
    //     error.extensions?.['response']?.message &&
    //     Array.isArray(error.extensions?.['response']?.message)
    // ) {
    //     errorMessage = error.extensions?.['response']?.message
    // } else if (error.extensions?.['response']?.message) {
    //     errorMessage = [error.extensions?.['response']?.message]
    // } else
    if (error.message) {
        errorMessage = [error.message];
    }
    else {
        errorMessage = [exports.BaseMessage.Error];
    }
    return { message: errorMessage };
};
exports.GraphQLFormatErrorFactory = GraphQLFormatErrorFactory;
