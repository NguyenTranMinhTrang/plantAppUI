import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const Detail = ({ navigation }) => {

    function renderImage() {
        return (
            <View style={{ height: '35%', width: '100%' }}>
                <Image
                    source={images.bannerBg}
                    resizeMode="cover"
                    style={{
                        height: '100%',
                        width: '100%'
                    }}
                />

                {/* render header of imafe part */}
                <View
                    style={{
                        flexDirection: 'row',
                        position: 'absolute',
                        top: SIZES.padding,
                        left: 0,
                        right: 0,
                        height: 50,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            left: SIZES.padding,
                            borderRadius: 25,
                            justifyContent: 'center',
                            alignItems: 'center',
                            backgroundColor: COLORS.gray

                        }}

                        onPress={() => navigation.goBack()}
                    >
                        <Image
                            source={icons.back}
                            resizeMode='contain'
                            style={{
                                height: 25,
                                width: 25,
                            }}
                        />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={{
                            height: 50,
                            width: 50,
                            right: SIZES.padding,
                            justifyContent: 'center',
                            alignItems: 'center',
                        }}
                    >
                        <Image
                            source={icons.focus}
                            resizeMode='contain'
                            style={{
                                height: 25,
                                width: 25,
                            }}
                        />
                    </TouchableOpacity>
                </View>

                <View
                    style={{
                        position: 'absolute',
                        bottom: SIZES.padding * 3,
                        left: SIZES.padding,
                    }}
                >
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>Glory</Text>
                    <Text style={{ ...FONTS.h1, color: COLORS.white }}>Mantas</Text>
                </View>
            </View>
        )
    }

    function renderContent() {

        const Requirement = ({ icon, percent }) => {
            return (
                <View
                    style={{
                        height: 60,
                        width: 50
                    }}
                >
                    <View
                        style={{
                            width: 50,
                            height: 50,
                            borderRadius: 10,
                            borderWidth: 1,
                            borderColor: COLORS.secondary,
                            justifyContent: 'center',
                            alignItems: 'center'
                        }}
                    >
                        <Image
                            source={icon}
                            resizeMode='contain'
                            style={{
                                height: 25,
                                width: 25,
                                tintColor: COLORS.secondary
                            }}
                        />
                    </View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: '100%',
                            height: 5,
                            borderRadius: 10,
                            backgroundColor: COLORS.secondary
                        }}
                    ></View>

                    <View
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            width: percent,
                            height: 5,
                            borderRadius: 10,
                            backgroundColor: COLORS.primary
                        }}
                    ></View>
                </View>
            )
        }

        return (
            <View
                style={{
                    marginTop: -40,
                    borderTopLeftRadius: 50,
                    borderTopRightRadius: 50,
                    backgroundColor: COLORS.lightGray,
                    paddingHorizontal: SIZES.padding,
                }}
            >
                {/* First row */}
                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}
                >
                    <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>Requirements</Text>
                    <View
                        style={{
                            height: 50,
                            width: 50,
                            justifyContent: 'center'
                        }}
                    >
                        <View
                            style={{
                                height: 5,
                                width: '100%',
                                backgroundColor: COLORS.secondary,
                                borderRadius: 10
                            }}
                        ></View>
                    </View>
                </View>
                {/* Second row */}

                <View
                    style={{
                        flexDirection: 'row',
                        marginTop: SIZES.padding,
                        justifyContent: 'space-between',
                        alignItems: 'center'
                    }}
                >
                    <Requirement icon={icons.sun} percent="75%" />
                    <Requirement icon={icons.drop} percent="50%" />
                    <Requirement icon={icons.temperature} percent="75%" />
                    <Requirement icon={icons.garden} percent="25%" />
                    <Requirement icon={icons.seed} percent="60%" />
                </View>

                {/* Third row  - Info */}
            </View>
        )
    }

    return (
        <View style={styles.container}>
            {renderImage()}
            {renderContent()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLORS.white
    }
});


export default Detail;