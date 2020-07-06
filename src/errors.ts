import { ValueObjectError, define } from '@eveble/eveble';

/*
SHARED ERRORS
*/
@define('EmptyStringError')
export class EmptyStringError extends ValueObjectError {
  constructor(typeName: string) {
    super(`${typeName}: can't be an empty string`);
  }
}

@define('UnimplementedError')
export class UnimplementedError extends ValueObjectError {
  constructor() {
    super(`Not implemented`);
  }
}
