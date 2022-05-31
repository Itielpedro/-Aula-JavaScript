new Error(message, fileName, lineNumber);

const MeuErro = new Error("mensagem inválida");
MeuErro.name = 'InvalidMessage';

throw MeuErro;