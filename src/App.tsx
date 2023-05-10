import React  from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './pages/SampleComponent';
import StylingComponent from './pages/StylingComponent';
import FlexBox from './pages/FlexBox';
import Posisition from './pages/Posisition';

const App = () => {
  return (
    <View>
      <ScrollView>
      <SampleComponent/>
      <StylingComponent />
      <FlexBox />
      <Posisition/>
    </ScrollView>
    </View>
  )
};
export default App;