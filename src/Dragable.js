import React, { Children, useRef } from 'react';
import { View, Text, PanResponder, Animated } from 'react-native';

const Dragable = ({children}) => {
  const pan = useRef(new Animated.ValueXY()).current;

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      // Reset the position when starting a new gesture
      pan.setOffset({
        x: pan.x._value,
        y: pan.y._value,
      });
      pan.setValue({ x: 0, y: 0 });
    },
    onPanResponderMove: Animated.event([null, { dx: pan.x, dy: pan.y }],{useNativeDriver:false}),
    onPanResponderRelease: () => {
      // You can add additional logic here when the dragging is released
      pan.flattenOffset();
    },
  });

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Animated.View
        {...panResponder.panHandlers}
        style={{
          transform: [{ translateX: pan.x }, { translateY: pan.y }],
        }}
      >
        {children}

      </Animated.View>
    </View>
  );
};

export default Dragable;
