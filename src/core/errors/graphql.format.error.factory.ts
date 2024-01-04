import { GraphQLError } from 'graphql'

export const BaseMessage = {
    ServerStartUp: 'Application Started on Port Number :: ',
    Error: 'Internal Server Error',
    Success: 'Success',
    RequestProcessed: 'Request Processed Successfully'
}
export const GraphQLFormatErrorFactory = (error: GraphQLError) => {
    let errorMessage
    // if (
    //     error.extensions?.['response']?.message &&
    //     Array.isArray(error.extensions?.['response']?.message)
    // ) {
    //     errorMessage = error.extensions?.['response']?.message
    // } else if (error.extensions?.['response']?.message) {
    //     errorMessage = [error.extensions?.['response']?.message]
    // } else
    if (error.message) {
        errorMessage = [error.message]
    } else {
        errorMessage = [BaseMessage.Error]
    }
    return { message: errorMessage }
}