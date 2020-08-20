import {connect} from 'react-redux';
import Column from './Column';

export const getColumnsForList = ({cards}, cardId) => cards.filter(card => card.cardId == cardId);

const mapStateToProps = (state, props) => ({
  cards: getColumnsForList(state, props.id),
});

export default connect(mapStateToProps)(Column);