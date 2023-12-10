import { FaTrash, FaTrashRestore, FaEdit } from 'react-icons/fa';
import { NotesIconBox } from '../styles/styles';
import { RiInboxUnarchiveFill } from 'react-icons/ri';
import { Note } from '../types/note';
import { Dispatch } from '@reduxjs/toolkit';
import { toggleCreateNoteModal } from '../store/modal/modalSlice';
import {
  deleteNote,
  restoreNote,
  setArchiveNotes,
  setEditNote,
  setTrashNotes,
  unArchiveNote,
} from '../store/notesList/notesListSlice';

const getRelevantBtns = (type: string, note: Note, dispatch: Dispatch) => {
  const clickHandler = () => {
    dispatch(toggleCreateNoteModal(true));
    dispatch(setEditNote(note));
  };

  if (type === 'archive') {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(unArchiveNote(note))}
          data-info="Unarchive">
          <RiInboxUnarchiveFill style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Delete">
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else if (type === 'trash') {
    return (
      <>
        <NotesIconBox
          onClick={() => dispatch(restoreNote(note))}
          data-info="Restore">
          <FaTrashRestore style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(deleteNote(note))}
          data-info="Delete">
          <FaTrash />
        </NotesIconBox>
      </>
    );
  } else {
    return (
      <>
        <NotesIconBox onClick={clickHandler} data-info="Edit">
          <FaEdit style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setArchiveNotes(note))}
          data-info="Archive">
          <FaTrashRestore style={{ fontSize: '1rem' }} />
        </NotesIconBox>
        <NotesIconBox
          onClick={() => dispatch(setTrashNotes(note))}
          data-info="Restore">
          <FaTrash />
        </NotesIconBox>
      </>
    );
  }
};

export default getRelevantBtns;
