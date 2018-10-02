import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';

const tron = Reactotron
  .configure({ name: 'ContadorEstoque', host: '192.168.128.2' })
  .useReactNative()
  .use(reactotronRedux())
  .connect();

console.tron = tron;

tron.clear();
export default tron;
