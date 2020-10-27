import {connect} from 'react-redux';
import Counter from '../components/Counter';
import {increaseTotal, decreaseTotal} from '../action'

const mapDispatchToProps = (dispatch) => ({
    increaseTotal: () => {dispatch(increaseTotal())},
    decreaseTotal: () => {dispatch(decreaseTotal())}

})

const CounterContainer = connect(null, mapDispatchToProps)(Counter);

export default CounterContainer;