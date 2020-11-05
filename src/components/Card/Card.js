import React from 'react';
import styles from './Card.scss';
import propTypes from 'prop-types';

class Card extends React.Component {
  static propTypes = {
    title: propTypes.node,
  }
  
  render() {
    const { title } = this.props;
    return (       
      <article className={ styles.component }>
        <h3 className={ styles.title }>{ title }</h3>
      </article>
    );
  }  
}

export default Card; 