import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Acabamento extends EtapaFabricacao {
    pintura

    constructor(numero, modeloMovel, unidadesConcluidas, pintura) {
        super(numero, modeloMovel, unidadesConcluidas)
        this.pintura = pintura
    }

    descreverEtapa() {
        return `
        Modelo do móvel: ${this.modeloMovel} - Unidades concluidas: ${this.getUnidadesConcluidas} - Tipo de Pintura: ${this.Pintura}
        `
    }
}