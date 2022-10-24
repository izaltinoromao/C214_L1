class Filme{
    constructor (nome, diretor, duracao){
        this.nome = nome
        this.diretor = diretor
        this.duracao = duracao
    }

    getInfo(){
        return [this.nome, this.diretor, this.duracao]
    }
}

const filme = new Filme("Os trapalhoes", "Buffet", 80)
console.log(filme.getInfo())


const FilmeFactory = (nome, diretor, duracao) => ({
    nome,
    diretor,
    duracao,
    getInfo: () => ({nome, diretor, duracao})
})

const filmeFactory = FilmeFactory("Indiana jones", "Eu mesmo", 90)
console.log(filmeFactory.getInfo())