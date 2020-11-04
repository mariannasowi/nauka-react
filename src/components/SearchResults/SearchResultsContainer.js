import {connect} from 'react-redux';
import SearchResults from './SearchResults';
import {getCardsForList} from '../../redux/cardsRedux';
import {getColumnsForList} from '../../redux/columnsRedux';

const mapStateToProps = (state, props) => {
  const searchstring = props.match.params.id;

  return { 
    cards: getCardsForList(state, searchstring),
    columns: getColumnsForList(state, searchstring),
    lists: state.lists,
  };
};
    
export default connect(mapStateToProps)(SearchResults);