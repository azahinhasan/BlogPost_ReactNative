

import React from 'react';
import {createAppContainer} from 'react-navigation'; 
import {createStackNavigator} from 'react-navigation-stack';

import IndexScreen from './src/screens/IndexScreen';
import { Provider } from './src/context/BlogCOntext';


const navigator = createStackNavigator(
  {
    Index: IndexScreen,

  }, 
  {
    initialRouteName: 'Index',
    defaultNavigationOptions: {
      title: 'Blog Post',
    },
  }
);

const App= createAppContainer(navigator);

export default()=>{

    return (
      <Provider>
          <App/>
      </Provider>
    )
};