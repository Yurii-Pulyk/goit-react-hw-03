import css from './ContactList.module.css';
import Contact from './Contact';
export default function ContactList({ contacts, filter, onDeleteContact }) {
  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().startsWith(normalizedFilter)
  );
  return (
    <div className={css.contactList}>
      {visibleContacts.length > 0 ? (
        visibleContacts.map(contact => (
          <Contact
            key={contact.id}
            id={contact.id}
            name={contact.name}
            number={contact.number}
            onDelete={onDeleteContact}
          />
        ))
      ) : (
        <p>No contacts found.</p>
      )}
    </div>
  );
}
