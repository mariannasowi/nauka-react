import React from 'react';
import PropTypes from 'prop-types';
import styles from '../Search/Search.scss'; 
import Container from '../Container/Container';
import Hero from '../Hero/Hero';
import {searchResultContent} from '../../data/dataStore';
import ListLink from '../ListLink/ListLink';

class SearchResult extends React.Component {
  static propTypes = {
    id: PropTypes.string,
    moveCard: PropTypes.func,
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  }

  render() {
    const {cards} = this.props;

    return(
      <Container>
        <Hero titleText={searchResultContent.title} imgSrc={searchResultContent.image} />
        <section className={styles.component}>
          <h3 className={styles.title}>
            <span className={styles.icon}><i className={searchResultContent.icon}></i></span>
          </h3>
          <div className={styles.cards}>
            {cards.map(cardData => (
              <ListLink key={cardData.id} id={cardData.listId} title={cardData.listTitle} image={cardData.image} description={cardData.title + ' / ' + cardData.columnTitle} />
            ))}
          </div>
        </section>
      </Container>
    );
  }
}

export default SearchResult;