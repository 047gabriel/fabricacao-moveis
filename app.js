import { Ferramenta } from "./model/Ferramenta.js"
import { Corte } from "./model/Corte.js"
import { Montagem } from "./model/Montagem.js"
import { Acabamento } from "./model/Acabamento.js"

const trena = new Ferramenta("F001", "Trena")
const serra = new Ferramenta("F002", "Serra circular")
const parafusadeira = new Ferramenta("F003", "Parafusadeira")
const lixadeira = new Ferramenta("F004", "Lixadeira")
const pistolaPintura = new Ferramenta("F005", "Pistola de pintura")

const corte = new Corte(1, "Mesa Aurora", 10, "reto")
const montagem = new Montagem(2, "Mesa Aurora", 8, "parafusos")
const acabamento = new Acabamento(3, "Mesa Aurora", 6, "pintura acetinada")

corte.adicionarFerramenta(trena)
corte.adicionarFerramenta(serra)
montagem.adicionarFerramenta(trena)
montagem.adicionarFerramenta(parafusadeira)
acabamento.adicionarFerramenta(lixadeira)
acabamento.adicionarFerramenta(pistolaPintura)

console.log("Teste de adicionar unidades:")
console.log(`Adicionar 3 unidades: ${corte.adicionarUnidades(3)}`)
console.log(`Total após tentativa: ${corte.unidadesConcluidas}`)
console.log(`Adicionar 0 unidades: ${corte.adicionarUnidades(0)}`)
console.log(`Total após tentativa: ${corte.unidadesConcluidas}`)

const etapas = [corte, montagem, acabamento]

for (let indiceEtapa = 0; indiceEtapa < etapas.length; indiceEtapa++) {
	const etapa = etapas[indiceEtapa]
	console.log(`\nEtapa ${etapa.numero}: ${etapa.descreverEtapa()}`)
	console.log("Ferramentas utilizadas:")

	for (let indiceFerramenta = 0; indiceFerramenta < etapa.ferramentas.length; indiceFerramenta++) {
		const ferramenta = etapa.ferramentas[indiceFerramenta]
		console.log(`- ${ferramenta.codigo}: ${ferramenta.nome}`)
	}
}
