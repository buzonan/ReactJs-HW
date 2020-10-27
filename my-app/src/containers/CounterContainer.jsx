import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increaseTotal} from './action.js';

const mapDispatchToProps = (dispatch) => ({
    increaseTotal: () => {dispatch(increaseTotal())}
})

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;