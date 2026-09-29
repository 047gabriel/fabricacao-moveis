export class EtapaFabricacao {
    numero
    modeloMovel
    #unidadesConcluidas

    constructor(numero, modeloMovel, unidadesConcluidas) {
        this.numero = numero
        this.modeloMovel = modeloMovel
        this.#unidadesConcluidas = unidadesConcluidas
    }

    get getUnidadesConcluidas() {
        return console.log(`
            Unidades Concluidas: ${this.#unidadesConcluidas}
            `)
    }

    adicionarUnidades(valor) {
        if(valor > 0) {
             this.#unidadesConcluidas += valor
             return true
        }
        else {
            return false
        }
    }

    descreverEtapa() {
        
    }
}