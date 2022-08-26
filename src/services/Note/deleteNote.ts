import { NoteType } from '../../types/NoteType';

const localStorageName = 'InkNotes:NOTES';

export const deleteNote = (noteId: string | number | undefined) => {
  const storedNotes = localStorage.getItem(localStorageName);
  if (storedNotes) {
    const parsedNotes = JSON.parse(storedNotes);
    const removedNoteArray = parsedNotes.filter((note: NoteType) => {
      return note.id !== noteId;
    });

    localStorage.setItem(localStorageName, JSON.stringify(removedNoteArray));
  }
};
