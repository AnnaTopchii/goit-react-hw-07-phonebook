import { createSelector } from '@reduxjs/toolkit';
import { selectContacts } from './contacts/selectors';
import { selectFilter } from './filter/selectors';

export const selectVisibleContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter)
    );
  }
);
