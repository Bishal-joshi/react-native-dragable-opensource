# React Native Custom Drag Component

A customizable React Native Dragable component that can drag your child components.

## Installation

Install the package using npm or yarn:

```bash
npm i react-native-dragable-opensource

```
## Usage
wrap your component inside Dragable to drag your component
```javascript

import React from 'react';
import { SafeAreaView, TouchableOpacity, View ,Text} from 'react-native';
import Dragable from 'react-native-dragable-opensource';

const App = () => {
  return (
    <View style={{ flex: 1 }}>
    
     <Dragable>
        <View style={{height:100,width:100,backgroundColor:'red'}}>
          <Text>hello</Text>
        </View>
    </Dragable> 


    </View>
  );
};

export default App
```
