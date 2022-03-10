import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Platform } from "react-native";
import { icons, images, theme, COLORS, SIZES, FONTS } from "../constants";

const Home = ({ navigation }) => {

    // Dummy Data
    const [newPlants, setNewPlants] = React.useState([
        {
            id: 0,
            name: "Plant 1",
            img: images.plant1,
            favourite: false,
        },
        {
            id: 1,
            name: "Plant 2",
            img: images.plant2,
            favourite: true,
        },
        {
            id: 2,
            name: "Plant 3",
            img: images.plant3,
            favourite: false,
        },
        {
            id: 3,
            name: "Plant 4",
            img: images.plant4,
            favourite: false,
        },
    ]);

    const [friendList, setFriendList] = React.useState([
        {
            id: 0,
            img: images.profile1,
        },
        {
            id: 1,
            img: images.profile2,
        },
        {
            id: 2,
            img: images.profile3,
        },
        {
            id: 3,
            img: images.profile4,
        },
        {
            id: 4,
            img: images.profile5,
        },
    ]);


    function renderHeader() {

        function renderNewPlants(item, index) {
            return (
                <View
                    style={{
                        justifyContent: 'center',
                        alignItems: 'center',
                        marginHorizontal: SIZES.base
                    }}
                >
                    <Image
                        source={item.img}
                        resizeMode="cover"
                        style={{
                            width: SIZES.width * 0.23,
                            height: '82%',
                            borderRadius: 15
                        }}
                    />
                    <View
                        style={{
                            position: 'absolute',
                            bottom: '17%',
                            right: 0,
                            borderTopLeftRadius: 10,
                            borderBottomLeftRadius: 10,
                            paddingHorizontal: SIZES.base,
                            backgroundColor: COLORS.primary
                        }}
                    >
                        <Text style={{ color: COLORS.white, ...FONTS.body4 }}>{item.name}</Text>
                    </View>

                    <TouchableOpacity
                        style={{
                            position: 'absolute',
                            top: '15%',
                            left: 7,
                        }}

                        onPress={() => item.favourite = !item.favourite}
                    >
                        <Image
                            source={item.favourite ? icons.heartRed : icons.heartGreenOutline}
                            resizeMode="contain"
                            style={{
                                height: 20,
                                width: 20,
                            }}
                        />
                    </TouchableOpacity>
                </View>
            )
        }

        return (
            <View
                style={{
                    height: '30%',
                    backgroundColor: COLORS.white,

                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.primary
                    }}
                >
                    <View
                        style={{
                            marginTop: Platform.OS === "ios" ? SIZES.padding : SIZES.padding * 2,
                            marginHorizontal: SIZES.padding
                        }}
                    >
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <Text style={{ color: COLORS.white, ...FONTS.h3 }}>New Plants</Text>
                            <TouchableOpacity
                                onPress={() => console.log('Focus on password')}
                            >
                                <Image
                                    source={icons.focus}
                                    resizeMode="contain"
                                    style={{
                                        height: 20,
                                        width: 20,
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: SIZES.base }}>
                            <FlatList
                                horizontal
                                showsHorizontalScrollIndicator={false}
                                data={newPlants}
                                keyExtractor={(item) => item.id.toString()}
                                renderItem={({ item, index }) => renderNewPlants(item, index)}
                            />
                        </View>
                    </View>
                </View>
            </View>
        )
    }

    function renderContent() {
        return (
            <View
                style={{
                    height: '48%',
                    backgroundColor: COLORS.lightGray
                }}
            >
                <View
                    style={{
                        flex: 1,
                        borderBottomLeftRadius: 50,
                        borderBottomRightRadius: 50,
                        backgroundColor: COLORS.white
                    }}
                >
                    <View
                        style={{
                            marginTop: SIZES.font,
                            marginHorizontal: SIZES.padding
                        }}
                    >
                        <View
                            style={{
                                flexDirection: 'row',
                                alignItems: 'center',
                                justifyContent: 'space-between'
                            }}
                        >
                            <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>Today's share</Text>
                            <TouchableOpacity
                            >
                                <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>See All</Text>
                            </TouchableOpacity>
                        </View>

                        <View
                            style={{
                                marginTop: SIZES.base,
                                flexDirection: 'row',
                                height: '82%'
                            }}
                        >
                            <View
                                style={{
                                    flex: 1
                                }}
                            >
                                <TouchableOpacity
                                    style={{ flex: 1 }}
                                    onPress={() => navigation.navigate('Detail')}
                                >
                                    <Image
                                        source={images.plant5}
                                        resizeMode='cover'
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>

                                <TouchableOpacity
                                    style={{ flex: 1, marginTop: SIZES.base }}
                                    onPress={() => navigation.navigate('Detail')}
                                >
                                    <Image
                                        source={images.plant6}
                                        resizeMode='cover'
                                        style={{
                                            width: "100%",
                                            height: "100%",
                                            borderRadius: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>

                            <TouchableOpacity
                                style={{
                                    flex: 1,
                                    marginLeft: SIZES.font
                                }}

                                onPress={() => navigation.navigate('Detail')}
                            >
                                <Image
                                    source={images.plant7}
                                    resizeMode='cover'
                                    style={{
                                        width: "100%",
                                        height: "100%",
                                        borderRadius: 20
                                    }}
                                />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>
        )
    }


    function renderFooter() {

        function renderFriends() {
            if (friendList.length === 0) {
                return (<View></View>)
            }
            else if (friendList.length <= 3) {
                return (
                    friendList.map((item, index) => (
                        <View
                            key={`friend-${index}`}
                        >
                            <Image
                                source={item.img}
                                resizeMode="cover"
                                style={{
                                    height: 50,
                                    width: 50,
                                    borderRadius: 25,
                                    borderWidth: 3,
                                    borderColor: COLORS.primary
                                }}
                            />
                        </View>
                    ))
                )
            }
            else {
                return (
                    <View
                        style={{
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        {
                            friendList.map((item, index) => {
                                if (index < 3) {
                                    return (
                                        <View
                                            key={`friend-${index}`}
                                            style={index == 0 ? {} : { marginLeft: -20 }}
                                        >
                                            <Image
                                                source={item.img}
                                                resizeMode="cover"
                                                style={{
                                                    height: 50,
                                                    width: 50,
                                                    borderRadius: 25,
                                                    borderWidth: 3,
                                                    borderColor: COLORS.primary
                                                }}
                                            />
                                        </View>
                                    )
                                }
                            })
                        }
                        <Text style={{ marginLeft: 5, color: COLORS.secondary, ...FONTS.body3 }}>+ {friendList.length - 3} more</Text>
                    </View>
                )
            }
        }

        return (
            <View
                style={{
                    height: '22%',
                    backgroundColor: COLORS.lightGray
                }}
            >
                <View style={{ flex: 1, backgroundColor: COLORS.lightGray }}>
                    <View style={{ marginTop: SIZES.base, marginHorizontal: SIZES.padding }}>
                        <Text style={{ ...FONTS.h2, color: COLORS.secondary }}>Add Friends</Text>
                        <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>5 total</Text>
                        <View style={{ flexDirection: 'row', height: '48%' }}>
                            <View
                                style={{ flexDirection: 'row', flex: 1.3, alignItems: 'center', }}
                            >
                                {renderFriends()}
                            </View>

                            <View
                                style={{ flexDirection: 'row', flex: 1, justifyContent: 'flex-end', alignItems: 'center', }}
                            >
                                <Text style={{ ...FONTS.body3, color: COLORS.secondary }}>Add New</Text>
                                <TouchableOpacity
                                    style={{
                                        marginLeft: SIZES.base,
                                        height: 40,
                                        width: 40,
                                        borderRadius: 10,
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        backgroundColor: COLORS.gray
                                    }}

                                    onPress={() => console.log('plus')}
                                >
                                    <Image
                                        source={icons.plus}
                                        resizeMode="contain"
                                        style={{
                                            height: 20,
                                            width: 20
                                        }}
                                    />
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </View>
            </View>
        )
    }
    return (
        <View style={styles.container}>
            {renderHeader()}
            {renderContent()}
            {renderFooter()}
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});


export default Home;