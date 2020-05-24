export function validityEmail(
  value,
  setMensageErrorEmail,
  listUser,
  operation,
) {
  if (value === '') {
    setMensageErrorEmail('Email is required');
    return false;
  } else {
    let re = new RegExp('[A-Za-z0-9\\._-]+@[A-Za-z]+\\.[A-Za-z]+');
    if (!value.match(re)) {
      setMensageErrorEmail('Email is Invalid');
      return false;
    } else {
      if (operation === 'REGISTER') {
        let userRegistered = listUser.find(element => element.email === value);
        if (userRegistered) {
          setMensageErrorEmail(
            'Email Already registered, please insert an other email',
          );
          return false;
        } else {
          setMensageErrorEmail('');
          return true;
        }
      } else {
        setMensageErrorEmail('');
        return true;
      }
    }
  }
}
