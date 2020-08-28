import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import Demo from '../components/demo/';

import * as actions from '../redux/actions';
import { createFlights } from '../redux/selectors';

const mapStateToProps = state => ({
    flights: createFlights(state)
});

const mapDispatchToProps = dispatch => ({
    actions: bindActionCreators(actions, dispatch)
});
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Demo);
