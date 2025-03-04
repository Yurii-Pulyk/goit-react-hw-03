import Contact from './Contact';
export default function ContactList({ contacts }) {
  return (
    <ul>
      {contacts.map(({ id, name, number }) => (
        <Contact key={id} name={name} number={number} />
      ))}
    </ul>
  );
}
