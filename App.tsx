import React  from 'react';
import {View, ScrollView} from 'react-native';
import SampleComponent from './SampleComponent';
import StylingReactNativeCompnent from './StylingReactNativeCompnent';
import FlexBox from './FlexBox';
import Posisition from './Posisition';

const App = () => {
  return (
    <View>
      <ScrollView>
      {/* <SampleComponent/>
      <StylingReactNativeCompnent />
      <FlexBox /> */}
      <Posisition/>
    </ScrollView>
    </View>
  )
};
export default App;