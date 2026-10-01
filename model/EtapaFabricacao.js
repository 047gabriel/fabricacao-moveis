export class EtapaFabricacao {
    numero
    modeloMovel
    #unidadesConcluidas
    ferramentas

    constructor(numero, modeloMovel, unidadesConcluidas) {
        this.numero = numero
        this.modeloMovel = modeloMovel
        this.#unidadesConcluidas = unidadesConcluidas
        this.ferramentas = []
    }

    get unidadesConcluidas() {
        return this.#unidadesConcluidas
    }

    adicionarFerramenta(ferramenta) {
        this.ferramentas.push(ferramenta)
    }

    adicionarUnidades(valor) {
        if (valor > 0) {
            this.#unidadesConcluidas += valor
            return true
        }
        return false
    }

    descreverEtapa() {
        throw new Error('O método deve ser implementado nas classes filhas.')
    }
}