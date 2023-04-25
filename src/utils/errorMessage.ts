export const errorMessage = (error: any) => {
  const responseErr = error?.response;
  let errorMessage = '';

  if (responseErr && responseErr.status === 422) {
    const errorArr = responseErr.data.errors;
    const errors = Object.values(errorArr) as object;
    errorMessage = errors[0][0];
  } else if ((responseErr && responseErr.status === 400) || responseErr.status === 403) {
    errorMessage = responseErr.data.message;
  } else {
    errorMessage = 'Something went wrong';
  }

  return errorMessage;
};
