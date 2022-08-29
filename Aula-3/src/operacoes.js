const validate = require('validate.js');
const CalculadoraConstraint = require('./validate');

const Calculadora = {
    soma(num) {
        const validateNum = validate({ num },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Error';
        }
        return num + num;
    },

    subtraction(num) {
        const validateNum = validate({ num },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Error';
        }
        return num - 2;
    },

    multiplication(num) {
        const validateNum = validate({ num },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Error';
        }
        return num * num;
    },

    division(num) {
        const validateNum = validate({ num },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Error';
        }
        return num / 4;
    },

    power(num) {
        const validateNum = validate({ num },  CalculadoraConstraint.calculadoraConstraint);      
        if(validateNum !== undefined ){
            return 'Error';
        }
        return num * num;
    },
};

module.exports = Calculadora;