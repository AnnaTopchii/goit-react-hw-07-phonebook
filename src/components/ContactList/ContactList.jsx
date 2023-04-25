import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Text, Button } from './ContactList.styled';

import { deleteContact } from 'redux/operations';
import { selectFilter, selectContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContacts);
  const filterValue = useSelector(selectFilter);

  const visibleContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filterValue)
    );
  };

  return (
    <List>
      {visibleContacts().map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Text>
            {name}: {phone}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
      {visibleContacts().length === 0 && (
        <p>Sorry, You have no contacts with such name</p>
      )}
    </List>
  );
};
