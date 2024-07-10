import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts, onDelete }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id} className={s.listItem}>
              <Contact data={contact} onDelete={onDelete} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
