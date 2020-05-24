export function validityConfirmPassword(
  getPassword,
  getConfirmPassword,
  setMensageErrorConfirmPassword,
) {
  if (getConfirmPassword === '') {
    setMensageErrorConfirmPassword('Confirm Password is required');
    return false;
  } else if (getConfirmPassword !== getPassword) {
    setMensageErrorConfirmPassword('confirm password does not equal password');
    return false;
  } else {
    setMensageErrorConfirmPassword('');
    return true;
  }
}
