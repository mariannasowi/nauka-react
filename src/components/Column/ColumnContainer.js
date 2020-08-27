import {connect} from 'react-redux';
import Column from './Column';
import shortid from 'shortid';
import {ADD_CARD} from '../../redux/cardsRedux';

export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARD });

const mapStateToProps = (state, props) => ({
  cards: getCardsForColumn(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addCard: title => dispatch(createActionAddCard({
    columnId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(Column);