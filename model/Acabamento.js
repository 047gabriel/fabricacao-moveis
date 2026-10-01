import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Acabamento extends EtapaFabricacao {
    tipoAcabamento

    constructor(numero, modeloMovel, unidadesConcluidas, tipoAcabamento) {
        super(numero, modeloMovel, unidadesConcluidas)
        this.tipoAcabamento = tipoAcabamento
    }

    descreverEtapa() {
        return `Modelo do móvel: ${this.modeloMovel}; unidades concluídas: ${this.unidadesConcluidas}; tipo de acabamento: ${this.tipoAcabamento}.`
    }
}