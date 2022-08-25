export const lengthCrop = (lengthToCrop: number, text: string) => {
  const croppedText =
    text.length < lengthToCrop ? text : `${text.slice(0, lengthToCrop)}...`;

  return croppedText;
};
