var fourLinux;
(function (fourLinux) {
    var Aula = (function () {
        function Aula(inscritos) {
            this.alunos = inscritos;
        }
        Aula.prototype.mensagem = function () {
            return "Seja bem-vindo, temos " + this.alunos + " alunos na turma";
        };
        return Aula;
    }());
    fourLinux.Aula = Aula;
})(fourLinux || (fourLinux = {}));
var turma = new fourLinux.Aula(7);
