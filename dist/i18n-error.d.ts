import { ApolloError } from 'apollo-server-core';
import { EvebleTypes } from '@eveble/eveble';
export declare abstract class I18nError extends ApolloError {
    message: string;
    variables: {
        [key: string]: string | number;
    };
    code?: string | undefined;
    logLevel: EvebleTypes.Priority;
    protected constructor(message: string, variables?: {
        [key: string]: string | number;
    }, code?: string | undefined, logLevel?: EvebleTypes.Priority);
}
