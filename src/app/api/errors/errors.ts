export function Errors(code: string) {
  const errorMessages = [
    {
      code: "error_account_already_exists",
      message: "Já existe uma conta com este email",
      status: 409,
    },
    /*     {
      code: "error_account_already_exists2",
      message: "Já existe uma conta com este email 2",
      status: 409,
    } */
  ];

  const error = errorMessages.find((err) => err.code === code);
  return error ? { message: error.message, status: error.status } : null;
}