import React from 'react';
import PropTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import { settings } from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';

class SearchResults extends React.Component {
  static propTypes = {
    title: PropTypes.string,
    cards: PropTypes.array,
    icon: PropTypes.node,
  };

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  };

  render() {
    const { title, icon, cards } = this.props;
    return (
      <section className={styles.component}>
        <Container>
          <h3 className={styles.title}>
            <span className={styles.icon}>
              <Icon name={icon} />
            </span>
            {title}
          </h3>

          <div>
            {cards.map((cardData) => (
              <Card key={cardData.id} {...cardData} />
            ))}
          </div>
        </Container>
      </section>
    );
  }
}

export default SearchResults;