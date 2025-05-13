import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import { PlatformPressable } from '@react-navigation/elements';
import { useLinkBuilder, useTheme } from '@react-navigation/native';
import React from 'react';
import { StyleSheet, Text, View, ViewStyle } from 'react-native';
const TabBar = ({ state, descriptors, navigation }: any) => {
  const { colors } = useTheme();
  const { buildHref } = useLinkBuilder();
  type RouteName = 'index' | 'liked' | 'mySwaps' | 'notifications' | 'profile';
  type IconProps = {
  color: string;
  size: number;
  style?: any;
};

  const icons: Record<RouteName, React.FC<IconProps>> = {
    index: (props) => <AntDesign {...props} name="search1" size={24} color={props.color} />,
    liked: (props) => <AntDesign {...props} name="hearto" size={24} color={props.color} />,
    mySwaps: (props) => <AntDesign {...props} name="home" size={24} color={props.color} />,
    notifications: (props) => <AntDesign {...props} name="message1" size={24} color={props.color} />,
    profile: (props) => <FontAwesome6 {...props} name="user" size={24} color={props.color} />
  }
  return (
   <View style={styles.tabbar}>
      {state.routes.map((route: any, index: any) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;
        const Icon = icons[route.name as RouteName];

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <PlatformPressable
            key={index}
            href={buildHref(route.name, route.params)}
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
             style={[
                styles.barItem,
                { backgroundColor: isFocused ? 'white' : 'transparent' } as ViewStyle,
            ]}
          >
            {
                <Icon
                    color={isFocused ? "#2C2C2C": "white"}
                    size={24}
                    style={{ marginBottom: 5 }}
                />
            }
            <Text style={{ color: isFocused ? "#2C2C2C": "white" }}>
              {label}
            </Text>
          </PlatformPressable>
        );
      })}
    </View>
  )
}

const styles = StyleSheet.create({
    tabbar: {
        position: "absolute",
        bottom: 26,
        flexDirection: "row",
         justifyContent: "space-between",
        alignItems: "stretch",   
        marginHorizontal: 20,
        padding: 10,
        
        left: 0,
        right: 0,
        height: 90,
        gap: 2,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10
        },
        shadowRadius: 10,
        shadowOpacity: .2,
        backgroundColor: "#2C2C2C",
    },
    barItem: {
        flex: 1,
        backgroundColor: "white",
        borderRadius: 25,
        height: "100%",
        justifyContent: "center",
        alignItems: "center",

    }
})

export default TabBar