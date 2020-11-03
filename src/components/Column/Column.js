import React from 'react';
import styles from './Column.scss';
import propTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {Droppable} from 'react-beautiful-dnd';
import DraggableCard from '../Card/DraggableCard.js';

class Column extends React.Component {

  static propTypes = {
    title: propTypes.string,
    cards: propTypes.array,
    icon: propTypes.node,
    addCard: propTypes.func,
    id: propTypes.string,
    index: propTypes.number,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
  render() {
    const { title, icon, cards, addCard, id } = this.props;
    cards.sort((a, b) => a.index - b.index);

    return (
      <section className={ styles.component }>
        <h3 className={ styles.title }>
          <span className={ styles.icon }><Icon name={ icon } /></span>
          { title }
        </h3>
        <div>
          <Droppable droppableId={ id }>
            {provided => (
              <div
                className={styles.cards}
                {...provided.droppableProps}
                ref={provided.innerRef}
              >
                {cards.map((cardData, index) => (
                  <DraggableCard key={ cardData.id } { ...cardData } index={ index} />
                ))}

                { provided.placeholder }
              </div>
            )}
          </Droppable>
        </div>
        <div className={ styles.creator }>
          <Creator text={ settings.cardCreatorText } action={ addCard } />
        </div>
      </section>
    );
  }
}

export default Column;