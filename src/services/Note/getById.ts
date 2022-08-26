import { NoteType } from '../../types/NoteType';

const searchNoteById = (noteId: string | number | undefined) => {
  const localStorageName = 'InkNotes:NOTES';
  const storedNotes = localStorage.getItem(localStorageName);

  if (storedNotes) {
    const parsedNotes = JSON.parse(storedNotes);
    const filteredNote = parsedNotes.filter((note: NoteType) => {
      return note.id === Number(noteId);
    });
    return filteredNote;
  }

  return [];
};

export default searchNoteById;
