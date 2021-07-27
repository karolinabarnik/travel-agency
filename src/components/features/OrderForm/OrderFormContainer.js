import { getOrderOptions, setOrderOption } from '../../../redux/orderRedux';
import OrderForm from './OrderForm';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
  options: getOrderOptions(state),
});

const mapDispatchToProps = dispatch => ({
  setOrderOption: option => dispatch(setOrderOption(option)),
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderForm);