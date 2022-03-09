import { View, Text, SafeAreaView, StyleSheet, Image, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '../screens';
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";


const Tab = createBottomTabNavigator();

const TabBar = () => {

    const tabOptions = {
        showLabel: true,
        style: {
            height: '10%',
        }
    }

    const CameraButton = () => {
        return (
            <View
                style={{
                    justifyContent: 'center',
                    alignItems: 'center',
                    borderRadius: 25,
                    width: 50,
                    height: 50,
                    backgroundColor: COLORS.primary
                }}
            >
                <Image
                    source={icons.camera}
                    resizeMode="contain"
                    style={{
                        height: 23,
                        width: 23,
                    }}
                />
            </View>
        )
    }

    return (
        <Tab.Navigator

            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarShowLabel: false,
                tabBarStyle: {
                    height: '10%',
                },
                tabBarIcon: ({ focused }) => {
                    const tintColor = focused ? COLORS.primary : COLORS.gray;
                    switch (route.name) {
                        case "Home":
                            return (
                                <Image
                                    source={icons.flash}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: tintColor
                                    }}
                                />
                            )
                        case "Box":
                            return (
                                <Image
                                    source={icons.cube}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: tintColor
                                    }}
                                />
                            )
                        case "Camera":
                            return (
                                <CameraButton />
                            )
                        case "Search":
                            return (
                                <Image
                                    source={icons.search}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: tintColor
                                    }}
                                />
                            )
                        case "Favourite":
                            return (
                                <Image
                                    source={icons.heart}
                                    resizeMode="contain"
                                    style={{
                                        height: 25,
                                        width: 25,
                                        tintColor: tintColor
                                    }}
                                />
                            )
                    }
                }
            })}
        >
            <Tab.Screen
                name="Home"
                component={Home}
            />
            <Tab.Screen
                name="Box"
                component={Home}
            />
            <Tab.Screen
                name="Camera"
                component={Home}
            />
            <Tab.Screen
                name="Search"
                component={Home}
            />
            <Tab.Screen
                name="Favourite"
                component={Home}
            />
        </Tab.Navigator>
    )
}

export default TabBar;