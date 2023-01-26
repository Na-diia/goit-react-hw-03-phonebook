import PropTypes from 'prop-types';

import styles from './contact-list.module.css';

export const ContactList =({filter, deleteContact}) => {
   const contacts = filter.map(({id, name, number}) => (
    <li key={id}><p className={styles.item}>{name} : {number}</p>
    <button type="button" className={styles.delete}
     onClick={() => deleteContact(id)}>Delete</button></li>));

    return(
     <ul className={styles.list}>
       {contacts}
     </ul>
    )
};

ContactList.propTypes = {
  filter: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    })
  ),
  deleteContact: PropTypes.func.isRequired,
};

ContactList.defaultProps = {
  filter: [],
};