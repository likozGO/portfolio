import { connect } from 'react-redux';

import StageHello from '../components/stage-hello';
import { stagesOperations, stagesSelectors } from '../ducks/stages/index';
import { STAGES_DATA } from '../translations/translation-keys';

function mapStateToProps(state) {
  return {
    helloFriendTranslation: STAGES_DATA.HELLO_FRIEND,
    selectHello: stagesSelectors.selectHello(state),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    setHello: (isReady) => {
      dispatch(stagesOperations.setHello(isReady));
    },
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(StageHello);
