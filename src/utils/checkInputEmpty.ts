export const checkInputEmpty = (titleInput: HTMLInputElement) => {
  const errors: string[] = [];
  if (!titleInput.value || titleInput.value.trim().length === 0) {
    errors.push('O campo "título" não pode estar vazio');
    return errors;
  }
  return errors;
};
