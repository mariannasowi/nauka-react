import React from 'react';
import propTypes from 'prop-types';
import styles from './SearchResults.scss';
import Container from '../Container/Container';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Icon from '../Icon/Icon';
import {Link} from 'react-router-dom';
import {DragDropContext, Droppable} from 'react-beautiful-dnd';

class SearchResults extends React.Component {

  static propTypes = {
    title: propTypes.node.isRequired,
    icon: propTypes.node,
    index: propTypes.number,
    cards: propTypes.array,
    columns: propTypes.array,
    id: propTypes.string,   
  }

  static defaultProps = {
    icon: settings.search.icon,
    title: settings.search.resultTitle,
  };

  render() {
    const { title, icon, cards, id } = this.props;

    return (
      <DragDropContext>
        <Container>
          <section className={ styles.component }>
            <h3 className={styles.title}>
              <span className={styles.icon}>
                <Icon name={icon} />
              </span>
              {title}
            </h3>
            <Droppable droppableId={ id } >
              { provided => (
                <div
                  className={ styles.cards }
                  { ...provided.droppableProps }
                  ref={ provided.innerRef }
                >
                  {cards.map((cardData, index) => (
                    <div key={ cardData.id } className={ styles.wrapper }>
                      <Card key={ cardData.id } { ...cardData } index={ index } />
                      <Link className={styles.link} to={`/list/${ cardData.listId}`}>
                        <p>Check out the list</p>
                      </Link>
                    </div>
                  ))}
                  { provided.placeholder }
                </div>
              )}
            </Droppable>
          </section>
        </Container>
      </DragDropContext>
    );
  }
}

export default SearchResults;