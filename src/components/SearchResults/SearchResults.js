import React from 'react';
import styles from './SearchResults.scss';
import PropTypes from 'prop-types';
import Card from '../Card/Card.js';

class SearchResults extends React.Component {
  
    static propTypes = {
      cards: PropTypes.array,
      changeSearchString: PropTypes.func,
      match: PropTypes.any,
    }
    
    render() {
      const { cards } = this.props;
      return (
        <section className={styles.component}>
          {cards.map(cardData => (
            <Card key={cardData.id} {...cardData} />
          ))}
        </section>
      );
    }
}

export default SearchResults;