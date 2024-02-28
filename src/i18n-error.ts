import { EvebleTypes, DEFAULTS } from '@eveble/eveble';
import { GraphQLError } from 'graphql';

/**
 * All errors thrown in server must use or extend this error class. This allows the
 * error message to be translated before being served to the client.
 *
 * The error messages should be provided in the form of a string key which corresponds to
 * a key defined in the `i18n/messages/<languageCode>.json` files.
 *
 * Note that this class should not be directly used in code, but should be extended by
 * a more specific Error class.
 *
 * https://github.com/apollographql/apollo-server/blob/ce568b3ea6a02d304ca463db7b27b457a0841039/docs/source/migration.mdx#L947
 */
export abstract class I18nError extends GraphQLError {
  protected constructor(
    public message: string,
    public variables: { [key: string]: string | number } = {},
    public code?: string,
    public logLevel: EvebleTypes.Priority = DEFAULTS.LOGGING_LEVELS.warning
  ) {
    super(message, {
      extensions: { code, variables, logLevel },
    });
  }
}
