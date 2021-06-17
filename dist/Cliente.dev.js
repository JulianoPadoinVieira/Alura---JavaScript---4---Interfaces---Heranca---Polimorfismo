"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Cliente = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var Cliente =
/*#__PURE__*/
function () {
  _createClass(Cliente, [{
    key: "cpf",
    get: function get() {
      return this._cpf;
    }
  }]);

  function Cliente(nome, cpf, senha) {
    _classCallCheck(this, Cliente);

    this.nome = nome;
    this._cpf = cpf;
    this._senha = senha;
    this.autenticar = 1;
  }

  _createClass(Cliente, [{
    key: "autenticar",
    value: function autenticar() {
      return true;
    }
  }]);

  return Cliente;
}();

exports.Cliente = Cliente;