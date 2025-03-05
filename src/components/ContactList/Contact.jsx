import { IoCall } from 'react-icons/io5';
import { FaUser } from 'react-icons/fa';
export default function Contact({ id, name, number, onDelete }) {
  return (
    <div>
      <p>
        <FaUser />
        {name}
      </p>
      <p>
        <IoCall />
        {number}
      </p>
      <button onClick={() => onDelete(id)}>Delete</button>
    </div>
  );
}
