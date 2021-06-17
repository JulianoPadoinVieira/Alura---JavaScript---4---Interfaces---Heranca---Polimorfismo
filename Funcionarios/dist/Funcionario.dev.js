"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Funcionario = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Funcionario =
/*#__PURE__*/
function () {
  function Funcionario(nome, salario, cpf) {
    _classCallCheck(this, Funcionario);

    this._nome = nome;
    this._salario = salario;
    this._cpf = cpf;
    this._bonificacao = 1;
    this._senha;
  }

  _createClass(Funcionario, [{
    key: "autenticar",
    value: function autenticar(senha) {
      return senha == this._senha;
    }
  }, {
    key: "cadastrarSenha",
    value: function cadastrarSenha(senha) {
      this._senha = senha;
    }
  }]);

  return Funcionario;
}();

exports.Funcionario = Funcionario;