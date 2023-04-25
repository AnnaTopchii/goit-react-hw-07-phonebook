// import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

import { Container, Title, SubTitle } from './App.styled';
import { selectContacts } from 'redux/selectors';

export const App = () => {
  const contacts = useSelector(selectContacts);

  return (
    <Container>
      <Title>Phone book</Title>
      <ContactForm />

      <SubTitle>Contacts</SubTitle>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactList />
        </>
      ) : (
        'You have no contacts'
      )}
    </Container>
  );
};
