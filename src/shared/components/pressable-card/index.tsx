import React from 'react';
import {
  GestureResponderEvent,
  TouchableWithoutFeedback,
  TouchableWithoutFeedbackProps,
  View,
} from 'react-native';
import Reanimated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';

export interface PressableScaleProps extends TouchableWithoutFeedbackProps {
  activeScale?: number;
  defaultBackground?: string;
  activeBackground?: string;
}

const ReanimatedTouchableWithoutFeedback = Reanimated.createAnimatedComponent(
  TouchableWithoutFeedback,
);

export const PressableScaleCard: React.FC<PressableScaleProps> = ({
  children,
  ...props
}) => {
  const {
    activeScale = 0.95, // default value
    onPressIn: _onPressIn,
    onPressOut: _onPressOut,
    delayPressIn = 0,
    defaultBackground = 'transparent',
    activeBackground = 'transparent',
    style,
    ...restProps
  } = props;

  const isPressedIn = useSharedValue(false);

  const touchableStyle = useAnimatedStyle(
    () => ({
      transform: [{scale: withSpring(isPressedIn.value ? activeScale : 1)}],
      backgroundColor: isPressedIn.value ? activeBackground : defaultBackground,
    }),
    [activeScale, isPressedIn],
  );

  const onPressIn = (event: GestureResponderEvent) => {
    isPressedIn.value = true;
    _onPressIn?.(event);
  };

  const onPressOut = (event: GestureResponderEvent) => {
    isPressedIn.value = false;
    _onPressOut?.(event);
  };

  return (
    <ReanimatedTouchableWithoutFeedback
      delayPressIn={delayPressIn}
      onPressIn={onPressIn}
      onPressOut={onPressOut}
      style={touchableStyle}
      {...restProps}>
      <View style={[{backgroundColor: defaultBackground}, style]}>
        {children}
      </View>
    </ReanimatedTouchableWithoutFeedback>
  );
};
