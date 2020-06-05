const convertToFormErrors = (err) => {
  const errors = {};
  err.details.forEach(({name, message}) => {
    errors[name] = message;
  });
  return errors;
};

export const createFormSchemaValidator = (schema) => (fields) => {
  try {
    schema.omit('_id').validator()(fields);
  } catch (err) {
    return convertToFormErrors(err);
  }
  return {};
};
