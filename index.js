import { Cliente } from "./Cliente.js";
import { Gerente } from "./Funcionarios/Gerente.js"
import { Diretor } from "./Funcionarios/Diretor.js"
import { SistemaAutenticacao } from "./SistemaAutenticacao.js"

const diretor = new Diretor("Juliano", 10000, 11648602070);
diretor.cadastrarSenha("123456");
const gerente = new Gerente("Karine", 5000, 11648597687);
gerente.cadastrarSenha("102030");

const cliente = new Cliente("lais", 45789648978, "456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "102030");
const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");

const clienteEstaLogado = SistemaAutenticacao.login(diretor, "456");

console.log(gerenteEstaLogado, diretorEstaLogado);