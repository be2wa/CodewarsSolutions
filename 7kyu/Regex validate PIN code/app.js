function validatePIN (pin) {
  return pin.match(/^[0-9]+$/) != null && (pin.length == 4 || pin.length == 6);
}