import React from 'react';
import styles from './Home.scss';
import ListLink from '../ListLink/ListLink';
import propTypes from 'prop-types';
import {DragDropContext} from 'react-beautiful-dnd';

class Home extends React.Component {
  
  static propTypes = {
    title: propTypes.node,
    subtitle: propTypes.node,
    lists: propTypes.array,
  }

  render() {
    const {title, subtitle, lists} = this.props;
    const moveCardHandler = result => {
      if(
        result.destination
        &&
        (
          result.destination.index != result.source.index
          ||
          result.destination.droppableId != result.source.droppableId
        )
      ){
        console.log({
          id: result.draggableId,
          dest: {
            index: result.destination.index,
            columnId: result.destination.droppableId,
          },
          src: {
            index: result.source.index,
            columnId: result.source.droppableId,
          },
        });
      }
    };
    return (
      <main className={styles.component}>
        <h1 className={styles.title}>{title}</h1>
        <h2 className={styles.subtitle}>{subtitle}</h2>
        <DragDropContext onDragEnd={moveCardHandler}>
          {lists.map(listData => (
            <ListLink key={listData.id} {...listData} />
          ))}
        </DragDropContext>
      </main>
    );
  }  
}

export default Home;