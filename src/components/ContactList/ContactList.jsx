import { useDispatch, useSelector } from 'react-redux';
import { List, ListItem, Text, Button } from './ContactList.styled';

import { deleteContact } from 'redux/contacts/operations';
import { selectVisibleContacts } from 'redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const visibleContacts = useSelector(selectVisibleContacts);

  return (
    <List>
      {visibleContacts.map(({ id, name, phone }) => (
        <ListItem key={id}>
          <Text>
            {name}: {phone}
          </Text>
          <Button type="button" onClick={() => dispatch(deleteContact(id))}>
            Delete
          </Button>
        </ListItem>
      ))}
      {visibleContacts.length === 0 && (
        <p>Sorry, You have no contacts with such name</p>
      )}
    </List>
  );
};
