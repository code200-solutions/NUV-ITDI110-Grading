import React from 'react';
import {
  KeyboardAvoidingView,
  LayoutRectangle,
  Platform,
  StatusBar,
  View,
  ViewProps,
  ViewStyle,
} from 'react-native';
import {
  SafeAreaView as RNSafeAreaView,
  SafeAreaViewProps as RNSafeAreaViewProps,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

//import { Toaster } from 'sonner-native';
//import { useThemeHelpers } from '@/hooks/useThemeHelper';

type SafeAreaViewProps = Omit<ViewProps, 'style'> & {
  style?: ViewProps;
  containerStyle?: RNSafeAreaViewProps['style'];
  safeAreaProps?: Omit<RNSafeAreaViewProps, 'style'>;
};

const SafeAreaView: React.FC<SafeAreaViewProps> = ({
  children,
  containerStyle,
  style,
  safeAreaProps,
  ...props
}: SafeAreaViewProps) => {
  // Helpers
  //const { colorScheme, className } = useThemeHelpers();
  const safeInsets = useSafeAreaInsets();

  // Component states
  const [safeAreaLayout, setSafeAreaLayout] = React.useState<LayoutRectangle>();

  return (
    <>
      <RNSafeAreaView
        style={{flex: 1 }}
        {...safeAreaProps}
        onLayout={(event) => {
          setSafeAreaLayout(event.nativeEvent.layout);
          safeAreaProps?.onLayout?.(event);
        }}
      >
        <StatusBar
          translucent
          backgroundColor='transparent'
          barStyle='light-content'
        />
        <View
          style={[
            {
              height: safeAreaLayout
                ? safeAreaLayout.height - safeInsets.top //- safeInsets.bottom
                : '100%',
              width: '100%',
              flexDirection: 'column',
            },
            style,
          ]}
          {...props}
        >
          <KeyboardAvoidingView
            style={{flex: 1}}
            behavior={Platform.OS === 'ios' ? 'padding' : 'padding'}
          >
            {children}
          </KeyboardAvoidingView>
          {/*<Toaster
            theme={colorScheme}
            position='bottom-center'
            toastOptions={{ style: className('bg-surfaceVariant') }}
          />*/}
        </View>
      </RNSafeAreaView>
    </>
  );
};

export default SafeAreaView;
