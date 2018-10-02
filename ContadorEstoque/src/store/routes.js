import { StackNavigator } from 'react-navigation';

import Principal from 'pages/principal';


const Routes = StackNavigator({
  Principal: { screen: Principal },
}, {
  navigationOptions: {
    header: null,
  },
});

export default Routes;
