import React, { useReducer } from 'react';
import { v4 as uuid } from 'uuid';
import ContactContext from './ContactContext';
import ContactReducer from './ContactReducer';
import {
  ADD_CONTACT,
  DELETE_CONTACT,
  SET_CURRENT,
  CLEAR_CURRENT,
  UPDATE_CONTACT,
  FILTER_CONTACTS,
  CLEAR_FILTER,
} from '../types';

const ContactState = (props) => {
  const initialState = {
    contacts: [
      {
        id: 1,
        name: 'Jill Johnson',
        email: 'jill@gmail.com',
        phone: '111-111-1111',
        type: 'personal',
      },
      {
        id: 2,
        name: 'Rob Persival',
        email: 'robpersv@gmail.com',
        phone: '221-111-1111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'William Maelq',
        email: 'mael@gmail.com',
        phone: '331-111-1111',
        type: 'personal',
      },
      {
        id: 3,
        name: 'Harry White',
        email: 'whiteharry_@gmail.com',
        phone: '444-231-1234',
        type: 'professional',
      },
    ],
  };

  const [state, dispatch] = useReducer(ContactReducer, initialState);

  /*********************
   * *******************
   *  **FULL CRUD
   *********************/

  // Add Contact
  const addContact = (contact) => {
    contact.id = uuid();
    dispatch({ type: ADD_CONTACT, payload: contact });
  };

  // Delete Contact

  //Set Current Contact

  // Clear Current Contact

  // Update Contact

  // Filter Contacts

  // Clera Filter

  return (
    <ContactContext.Provider
      value={{
        contacts: state.contacts,
        addContact,
      }}
    >
      {props.children}
    </ContactContext.Provider>
  );
};

export default ContactState;
