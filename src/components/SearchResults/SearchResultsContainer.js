import {connect} from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux';

const mapStateToProps = (state, props) => {
  const inputString = props.match.params.id;
  return {
    cards: getCardsFromSearch(state, inputString),
  };
};

export default connect(mapStateToProps)(SearchResults);