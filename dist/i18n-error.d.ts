import { EvebleTypes } from '@eveble/eveble';
import { GraphQLError } from 'graphql';
export declare abstract class I18nError extends GraphQLError {
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
