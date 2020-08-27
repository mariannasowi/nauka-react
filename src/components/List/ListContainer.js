import {connect} from 'react-redux';
import List from './List';
import shortid from 'shortid';
import ADD_COLUMN from '../../redux/columnsRedux.js';

export const getColumnsForList = ({columns}, listId) => columns.filter(column => column.listId == listId);
export const createActionAddColumn = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_COLUMN });

const mapStateToProps = (state, props) => ({
  columns: getColumnsForList(state, props.id),
});

const mapDispatchToProps = (dispatch, props) => ({
  addColumn: title => dispatch(createActionAddColumn({
    listId: props.id,
    title,
  })),
});

export default connect(mapStateToProps, mapDispatchToProps)(List);