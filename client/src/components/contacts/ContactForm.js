import React, { useState, useContext, useEffect } from 'react';
import ContactContext from '../../context/contact/ContactContext';

const ContactForm = () => {
  const contactContext = useContext(ContactContext);

  const { addContact, updateContact, clearCurrent, current } = contactContext;

  useEffect(() => {
    if (current !== null) {
      setContact(current);
    } else {
      setContact({
        name: '',
        email: '',
        phone: '',
        type: 'personal',
      });
    }
  }, [contactContext, current]);

  const [contact, setContact] = useState({
    name: '',
    email: '',
    phone: '',
    type: 'personal',
  });

  const { name, email, phone, type } = contact;

  const onChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const onSubmit = (e) => {
    e.preventDefault();
    if (current === null) {
      addContact(contact);
    } else {
      updateContact(contact);
    }
    setContact({
      name: '',
      email: '',
      phone: '',
      type: 'personal',
    });
  };

  const clearAll = () => {
    clearCurrent();
  };

  return (
    <form onSubmit={onSubmit}>
      <h2 className='text-primary'>
        {current ? 'Edit Contact' : 'Add Contact'}
      </h2>
      <label for='name'>Name</label>
      <input
        type='text'
        placeholder='name'
        id='name'
        data-test='addcontact-name'
        label='name'
        name='name'
        value={name}
        onChange={onChange}
      />
      <label for='email'>Email</label>
      <input
        type='email'
        label='email'
        placeholder='Email'
        id='email'
        name='email'
        value={email}
        onChange={onChange}
      />
      <label for='phone'>Phone</label>
      <input
        type='text'
        placeholder='Phone'
        label='phone'
        id='phone'
        name='phone'
        value={phone}
        onChange={onChange}
      />
      <h5>Contact Type</h5>
      <input
        type='radio'
        name='type'
        value='personal'
        id='personal'
        checked={type === 'personal'}
        onChange={onChange}
      />{' '}
      <label for='personal'>Personal</label>{' '}
      <input
        type='radio'
        name='type'
        value='professional'
        id='professional'
        checked={type === 'professional'}
        onChange={onChange}
      />{' '}
      <label for='professional'>Professional</label>
      <div>
        <input
          type='submit'
          value={current ? 'Update Contact' : 'Add Contact'}
          className='btn btn-primary btn-block'
        />
      </div>
      {current && (
        <div>
          <button className='btn btn-light btn-block' onClick={clearAll}>
            Clear
          </button>
        </div>
      )}
    </form>
  );
};

export default ContactForm;
