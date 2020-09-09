import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import HomeScreen from "./screens/HomeScreen";
import DetailsScreen from './screens/DetailsScreen';


const navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Details:DetailsScreen,
  },
  {
    initialRouteName: "Home",
    defaultNavigationOptions: {
      title: "Restaurants Search"
    }
  }
);

export default createAppContainer(navigator);
