const localStorageScroll = 'InkNotes:ScrollPosition';

export const setScrollPosition = () => {
  localStorage.setItem(localStorageScroll, JSON.stringify(window.scrollY));
};

export const retrieveScrollPosition = () => {
  const storedPosition = localStorage.getItem(localStorageScroll);
  if (storedPosition) {
    window.scrollTo(0, JSON.parse(storedPosition));
  }

  localStorage.removeItem(localStorageScroll);
};
