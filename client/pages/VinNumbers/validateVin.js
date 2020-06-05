const VIN_REGEX = new RegExp('^[A-HJ-NPR-Z\\d]{8}[\\dX][A-HJ-NPR-Z\\d]{2}\\d{6}$');

const validateVin = (vin) => (vin && vin.match(VIN_REGEX) ? undefined : 'Please enter a valid 17-digit VIN number');

export default validateVin;
