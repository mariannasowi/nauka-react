import React from 'react';
import styles from './Card.scss';
import propTypes from 'prop-types';
import {Draggable} from 'react-beautiful-dnd';

class DraggableCard extends React.Component {
  
  static propTypes = {
    title: propTypes.node,
    id: propTypes.string,
    index: propTypes.number,
  }
  
  render() {
    const { title, id, index } = this.props;
    return (
      <Draggable draggableId={ id } index={ index } >
        {provided => (
          <article
            className={ styles.component }
            { ...provided.draggableProps }
            { ...provided.dragHandleProps } 
            ref={ provided.innerRef }
          >
            <h3 className={ styles.title }>{ title }</h3>
          </article>
        )}
      </Draggable> 
    );
  }
}

export default DraggableCard;
