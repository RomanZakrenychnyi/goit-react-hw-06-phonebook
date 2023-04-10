import style from './ContactList.module.css';

export const ContactList = ({ contacts, handleDeleteBtnClick }) => {
  return (
    <ul className={style.list}>
      {contacts.map(({ id, name, number }) => {
        return (
          <li className={style.item} key={id}>
            <div className={style.container}>
              <p className={style.contact}>
                {name}:<span className={style.number}>{number}</span>
              </p>
              <button
                className={style.btn}
                type="button"
                onClick={() => handleDeleteBtnClick(id)}
              >
                Delete
              </button>
            </div>
          </li>
        );
      })}
    </ul>
  );
};