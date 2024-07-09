import Contact from "../Contact/Contact";
import s from "./ContactList.module.css";

const ContactList = ({ contacts }) => {
  return (
    <>
      <ul className={s.list}>
        {contacts.map((contact) => {
          return (
            <li key={contact.id}>
              <Contact data={contact} />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default ContactList;
