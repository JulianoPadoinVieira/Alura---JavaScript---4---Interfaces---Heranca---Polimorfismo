"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.SistemaAutenticacao = void 0;

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
Ser autenticavel significa ter o metodo autenticar
 */
var SistemaAutenticacao =
/*#__PURE__*/
function () {
  function SistemaAutenticacao() {
    _classCallCheck(this, SistemaAutenticacao);
  }

  _createClass(SistemaAutenticacao, null, [{
    key: "login",
    value: function login(autenticavel, senha) {
      if (SistemaAutenticacao.ehAutenticavel(autenticavel)) {
        return autenticavel.autenticar(senha);
      }

      return false;
    } //Não é preciso criar uma instância para chamar o método

  }, {
    key: "ehAutenticavel",
    value: function ehAutenticavel(autenticavel) {
      //A chave "autenticar" existe dentro do objeto autenticavel
      return "autenticar" in autenticavel;
    }
  }]);

  return SistemaAutenticacao;
}();

exports.SistemaAutenticacao = SistemaAutenticacao;