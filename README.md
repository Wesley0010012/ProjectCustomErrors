# StandardErrors

StandardErrors is a package designed to define custom and default application errors for general use in software development.

## Installation

To install this package using `npm`, run the following command:

```sh
npm install standard-errors
```

## Usage

After installing the package, you can import it into your project as follows:

```js
const { CustomError, ErrorStatusEnum } = require("standard-errors");
```

You can then use these errors anywhere in your project, like this:

```js
throw new CustomError(
    "ANY ERROR MESSAGE",
    ErrorStatusEnum.INTERNAL_ERROR,
    "ANY ERROR DETAILS"
);
```

## Features of CustomError

The CustomError entity and its specializations provide access to:

- **Error Message**: The standard JavaScript error message.
- **Error Name**: The name of the error, as defined in the standard JavaScript `Error` object.
- **Timestamp**: The exact time when the error occurred.
- **Error Origin**: The specific artifact where the error originated, or `"Unknown"` if it cannot be determined in certain cases.
- **Error Details**: Additional details about the error, if provided during the throw.


## Custom Errors

This package includes the following custom errors:

### Authentication Errors
- `AuthenticationError` (Abstract)
- `Unauthenticated`
- `Unauthorized`

### Domain Errors
- `DomainError`

### Entity Errors
- `EntityError`

### Internal Errors
- `InternalError`

### Parameter Errors
- `ParamError` (Abstract)
- `InvalidParamError`
- `MissingParamError`

### Runtime Errors
- `NotFoundError`

### Validation Errors
- `ValidationError`

## Error Status Codes

Each error type is associated with a specific status code:

| Code | Error Type             |
|------|------------------------|
| 0    | INTERNAL_ERROR         |
| 1    | PARAM_ERROR            |
| 2    | NOT_FOUND              |
| 3    | DOMAIN_ERROR           |
| 4    | AUTHENTICATION_ERROR   |
| 5    | VALIDATION_ERROR       |
| 6    | ENTITY_ERROR           |