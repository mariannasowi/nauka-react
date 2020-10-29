import {connect} from 'react-redux';
import SearchResults from '../SearchResults/SearchResults';
import {getCardsFromSearch} from '../../redux/cardsRedux';
import { createAction_changeSearchString } from '../../redux/searchStringRedux.js';

const mapStateToProps = (state, props) => ({
  cards: getCardsFromSearch(state, props.match.params.searchString),
});

const mapDispatchToProps = (dispatch) => ({
  changeSearchString: (newSearchString) =>
    dispatch(createAction_changeSearchString(newSearchString)),
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchResults);
