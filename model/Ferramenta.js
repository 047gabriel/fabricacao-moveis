import { EtapaFabricacao } from "./EtapaFabricacao"

import class Ferramenta extends EtapaFabricacao {
    codigo
    nome

    constructor(codigo, nome) {
        this.codigo = codigo
        this.nome = nome
    }
}