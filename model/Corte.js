import { EtapaFabricacao } from "./EtapaFabricacao.js";

export class Corte extends EtapaFabricacao {
    tipoCorte

    constructor(numero, modeloMovel, unidadesConcluidas, tipoCorte) {
        super(numero, modeloMovel, unidadesConcluidas)
        this.tipoCorte = tipoCorte
    }


}
