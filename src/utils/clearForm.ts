/* eslint-disable no-param-reassign */
export const clearForm = (
  title: HTMLInputElement,
  text: HTMLTextAreaElement
) => {
  title.value = '';
  text.value = '';
};
