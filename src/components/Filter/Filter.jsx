import PropTypes from 'prop-types';

import styles from './filter.module.css';

export const Filter = ({filter, value}) => {

   return ( 
    <div>
    <p className={styles.text}>Find contacts by name</p>
     <input className={styles.search} 
      value={value}
      type="text" 
      pattern="^[a-zA-Za-яА-Я]+(([' -][a-zA-Za-яА-Я ])?[a-zA-Za-яА-Я]*)*$"
      onChange={filter}/>
     </div>
   )
};

Filter.propTypes = {
  filter: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};  