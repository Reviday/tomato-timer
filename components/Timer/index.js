import { connect } from 'react-redux'; // 나의 컴포넌트를 스토어에 연결하는 것을 도와줌
import { bindActionCreators } from 'redux'; 
import { actionCreators as tomatoActions } from '../../reducer';
import Timer from './presenter';

function mapStateToProps(state) {
    const { isPlaying, elapsedTime, timerDuration } = state;
    return {
        isPlaying,
        elapsedTime,
        timerDuration
    }
}

function mapDispatchToProps(dispatch) {
    return {
        startTimer: bindActionCreators(tomatoActions.startTimer, dispatch),
        restartTimer: bindActionCreators(tomatoActions.restartTimer, dispatch),
        addSecond: bindActionCreators(tomatoActions.addSecond, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Timer);