import { StackNavigator } from 'react-navigation';

import SplashScreen from '../screens/StartScreen';
import QuoteScreen from '../screens/QuoteScreen';

import { StatusBar } from 'react-native';

const HomeStack = StackNavigator({
    SplashScreen:{
        screen: SplashScreen,
        navigationOptions:{
            header: () => null,
        }
    },
    QuoteScreen: {
        screen: QuoteScreen,
        navigationOptions: {
            header: () => null,
        },
    }
});

export default StackNavigator({
    Home:{
        screen: HomeStack,
    }

},
{
    // mode: 'card',
    // // cardStyle: { paddingTop: StatusBar.currentHeight},
    // headerMode: 'none',
})
