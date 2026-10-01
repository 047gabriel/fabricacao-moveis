import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Corte extends EtapaFabricacao {
    tipoCorte

    constructor(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
        super(numero, modeloMovel, unidadesConcluidas)
        this.tipoCorte = tipoCorte
    }

    descreverEtapa() {
        return `
        Modelo do móvel: ${this.modeloMovel} - Unidades concluidas: ${this.getUnidadesConcluidas} - Tipo de Corte: ${this.tipoCorte}
        `
    }
}
