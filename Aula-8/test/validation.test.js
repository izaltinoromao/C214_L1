const Constants = require('../src/utils/constants');
const Validation = require('../src/utils/validation');

it('Carro correto', () => {
    const result = Validation.create({
        marca: "Ferrari",
        modelo: "488 pista",
        placa: "sfd4f99",
        cor: "vermelho"
    });
    expect(result).toEqual(undefined);
});

it('Carro sem placa', () => {
    const result = Validation.create({
        marca: "Ferrari",
        modelo: "488 pista",
        cor: "vermelho"
    });
    expect(result.name).toEqual(Constants.ErrorValidation.name);
});
