import { AppRegistry, YellowBox } from 'react-native';
import Main from 'index';
import 'config/Reactotronconfig';


YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated']);

AppRegistry.registerComponent('ContadorEstoque', () => Main);
