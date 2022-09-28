const Utils = require('../src/utils/utils');
const Constants = require('../src/utils/Constants');

it('Status Code OK', () => {
    const result = Utils.responseStatus(undefined);
    expect(result).toEqual(200);
});

it('Status Code BAD REQUEST', () => {
    const result = Utils.responseStatus(Constants.ErrorValidation.name);
    expect(result).toEqual(400);
});

it('Status Code CONFLICT', () => {
    const result = Utils.responseStatus(Constants.ErrorDuplicate.name);
    expect(result).toEqual(409);
});

it('Status Code NOT FOUND', () => {
    const result = Utils.responseStatus(Constants.ErrorNotFound.name);
    expect(result).toEqual(404);
});

it('Status Code ERROR', () => {
    const result = Utils.responseStatus("ERROR");
    expect(result).toEqual(500);
});

it('Status Code NOT IMPLEMENTED', () => {
    const result = Utils.responseStatus(Constants.ErrorNotImplemented.name);
    expect(result).toEqual(501);
});

it('Status Code BAD GATEWAY', () => {
    const result = Utils.responseStatus(Constants.ErrorBadGateway.name);
    expect(result).toEqual(502);
});

it('Status Code SERVICE UNAVAILABLE', () => {
    const result = Utils.responseStatus(Constants.ErrorServiceUnav.name);
    expect(result).toEqual(503);
});
