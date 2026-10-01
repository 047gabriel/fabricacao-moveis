import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Montagem extends EtapaFabricacao {
    tipoUniao

    constructor(numero, modeloMovel, unidadesConcluidas, tipoUniao) {
        super(numero, modeloMovel, unidadesConcluidas)
        this.tipoUniao = tipoUniao
    }

    descreverEtapa() {
        return `Modelo do móvel: ${this.modeloMovel}; unidades concluídas: ${this.unidadesConcluidas}; tipo de união: ${this.tipoUniao}.`
    }
}