export function validityName(getName, setNameMsgError) {
  if (!getName) {
    setNameMsgError('*Vazio, Insira um nome.');
    return false;
  } else if (!getName.match(/^[A-z ]+$/)) {
    setNameMsgError('Nome Inválido,insira somente letras');
    return false;
  }
  setNameMsgError('');
  return true;
}
