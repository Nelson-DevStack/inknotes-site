import { NoteType } from '../../types/NoteType';

export const getNotes = () => {
  const storedNotes = localStorage.getItem('InkNotes:NOTES');
  if (storedNotes) {
    const parsedNotes = JSON.parse(storedNotes);
    const sortedNotes = parsedNotes.sort((a: NoteType, b: NoteType) => {
      if (a.createdAt > b.createdAt) return -1;
      if (a.createdAt < b.createdAt) return 1;
      return 0;
    });
    return sortedNotes;
  }

  return [];
};
