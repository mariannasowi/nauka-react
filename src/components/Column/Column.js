import React from 'react';
import styles from './Column.scss';
import PropTypes from 'prop-types';
import {settings} from '../../data/dataStore';
import Card from '../Card/Card';
import Creator from '../Creator/Creator';
import Icon from '../Icon/Icon';
import {Droppable} from 'react-beautiful-dnd';

  
class Column extends React.Component {

  render() {
    const {title, icon, cards, addCard, id} = this.props;
    return (
      <section className={styles.component}>
        <h3 className={styles.title}>
          <span className={styles.icon}>
            <Icon name={icon} />
          </span>
          {title}
        </h3>
        <Droppable droppableId={id}>
          {provided => (
            <div 
              className={styles.cards}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {cards.map(cardData => (
                <Card key={cardData.id} {...cardData} />
              ))}
            </div>
          )}   
        </Droppable>
        <div className={styles.creator}>
          <Creator text={settings.cardCreatorText} action={addCard} />
        </div>
      </section>
    );
  }

  static propTypes = {
    title: PropTypes.node.isRequired,
    cards: PropTypes.array,
    icon: PropTypes.string,
    addCard: PropTypes.func,
    id: PropTypes.string,
  }

  static defaultProps = {
    icon: settings.defaultColumnIcon,
  }
}
  
export default Column; 