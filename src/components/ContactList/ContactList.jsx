import { ContactListItem } from './ContactListItem';

export const ContactList = ({ contacts, deleteContact }) => {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <ContactListItem
          key={id}
          name={name}
          number={number}
          id={id}
          onDelete={deleteContact}
        />
      ))}
    </ul>
  );
};
