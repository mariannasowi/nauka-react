import React from 'react';
import styles from './Column.scss';
import List from '../List/List.js';
import PropTypes from 'prop-types';
  
class Column extends React.Component {
  render() {
    return (
      <section className={styles.component}>
        <div className={styles.column}>{this.props.title}</div>
      </section>
    )
  }
}

Column.propTypes = {
  title: PropTypes.string,
};
  
export default Column; 
