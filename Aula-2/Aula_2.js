class Veiculo {

    placa;
    ano;

    Veiculo (){};

    Veiculo (placa, ano){
        this.placa = placa;
        this.ano = ano;
    }

    getPlaca() {
        return this.placa;
    }
    setPlaca(placa) {
        this.placa = placa;
    }
    
    getAno() {
        return this.ano;
    }
    setAno(ano) {
        this.ano = ano;
    }
    
    exibirDados(){
        console.log("Placa do veiculo: ", this.placa)
        console.log("Ano do veiculo: ", this.ano)
    }

}

class Caminhao extends Veiculo{

    eixos;

    Caminhao(placa, ano, eixos){
        this.placa = placa;
        this.ano = ano;
        this.eixos = eixos;
    }

    setEixos(eixos){
        this.eixos = eixos;
    }
    
    getEixos(){
        return this.eixos;
    }

    exibirDados(){
        console.log("Placa do veiculo: ", this.placa)
        console.log("Ano do veiculo: ", this.ano)
        console.log("Eixos do caminhão: ", this.eixos)
    }

}

class Onibus extends Veiculo{

    assentos;

    Onibus(placa, ano, assentos){
        this.placa = placa;
        this.ano = ano;
        this.assentos = assentos;
    }

    setAssentos(assentos){
        this.assentos = assentos;
    }
    
    getAssentos(){
        return this.eixos;
    }

    exibirDados(){
        console.log("Placa do veiculo: ", this.placa)
        console.log("Ano do veiculo: ", this.ano)
        console.log("Assentos do onibus: ", this.assentos)
    }

}

let veiculo = new Veiculo();
let caminhao = new Caminhao();
let onibus = new Onibus();

veiculo.setPlaca("FTD-3059");
veiculo.setAno(2015);

caminhao.setPlaca("FTX-4559");
caminhao.setAno(2000);
caminhao.setEixos(8);

onibus.setPlaca("ATX-7625");
onibus.setAno(2020);
onibus.setAssentos(42);

veiculo.exibirDados();
caminhao.exibirDados();
onibus.exibirDados();