export function validityPassword(getPassword, setMensageErrorPassword) {
  if (getPassword === '') {
    setMensageErrorPassword('Password is required');
    return false;
  } else if (getPassword.length < 6) {
    setMensageErrorPassword('the password must be at least 6 characters');
    return false;
  } else {
    setMensageErrorPassword('');
    return true;
  }
}
