import React from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Text,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
    ScrollView
} from 'react-native';
import { moderateScale } from 'react-native-size-matters';
import Svg, { Path } from 'react-native-svg';
import { AntDesign, FontAwesome } from '@expo/vector-icons';
export default class FetchSample extends React.Component {
    constructor() {
        super();
        this.state = {
            status: false
        }
    }

    toggleStatus() {
        this.setState({
            status: !this.state.status
        });
    }

    showChatBot = () => {
        const keyboardVerticalOffset = Platform.OS === 'ios' ? 70 : 0;
        if (this.state.status == true) {
            return (
                <TouchableWithoutFeedback
                    onPress={() => {
                        Keyboard.dismiss();
                    }}
                >
                    <View style={{ width: '100%', height: '100%', backgroundColor: '#455443' }}>
                        <ScrollView style={styles.showChatBot}>
                            <View>
                                <View style={[styles.item, styles.itemIn]}>
                                    <View style={[styles.balloon, { backgroundColor: 'grey' }]}>
                                        <Text style={{ paddingTop: 5, color: 'white' }}>Hey! How are you?</Text>
                                        <View
                                            style={[
                                                styles.arrowContainer,
                                                styles.arrowLeftContainer,
                                            ]}
                                        >
                                            <Svg style={styles.arrowLeft} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)}
                                                viewBox="32.484 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
                                                <Path
                                                    d="M38.484,17.5c0,8.75,1,13.5-6,17.5C51.484,35,52.484,17.5,38.484,17.5z"
                                                    // fill="grey"
                                                    x="0"
                                                    y="0"
                                                />
                                            </Svg>
                                        </View>
                                    </View>
                                </View>

                                <View style={[styles.item, styles.itemOut]}>
                                    <View style={[styles.balloon, { backgroundColor: '#1084ff' }]}>
                                        <Text style={{ paddingTop: 5, color: 'white' }}>Hey! I am good. How are you?</Text>
                                        <View
                                            style={[
                                                styles.arrowContainer,
                                                styles.arrowRightContainer,
                                            ]}
                                        >
                                            <Svg style={styles.arrowRight} width={moderateScale(15.5, 0.6)} height={moderateScale(17.5, 0.6)}
                                                viewBox="32.485 17.5 15.515 17.5" enable-background="new 32.485 17.5 15.515 17.5">
                                                <Path
                                                    d="M48,35c-7-4-6-8.75-6-17.5C28,17.5,29,35,48,35z"
                                                    // fill="#1084ff"
                                                    x="0"
                                                    y="0"
                                                />
                                            </Svg>
                                        </View>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                        <KeyboardAvoidingView behavior='position' keyboardVerticalOffset={keyboardVerticalOffset}>
                            <View style={{ alignItems: 'center' }}>
                                <View style={{ flexDirection: 'row' }}>
                                    <TextInput placeholder='Nhap tin nhan...' style={styles.textChat} />
                                    <TouchableOpacity>
                                        <FontAwesome name="send" size={22} color="#33CCFF" style={styles.iconSend} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </KeyboardAvoidingView>
                    </View>
                </TouchableWithoutFeedback>
            )
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <View>
                    {this.showChatBot()}
                </View>
                <View style={styles.chatbot}>
                    <TouchableOpacity onPress={() => this.toggleStatus()}>
                        <AntDesign name="message1" size={24} color="white" style={styles.iconChat} />
                    </TouchableOpacity>
                </View>
            </View>
        );
    }
}

var styles = StyleSheet.create({
    showChatBot: {
        width: '100%',
        height: '92%',
        backgroundColor: '#455443',
        // alignItems: 'center',
    },
    textChat: {
        width: '87%',
        height: 35,
        borderRadius: 20,
        padding: 10,
        color: 'black',
        backgroundColor: '#E0EEEE',
        fontSize: 15,
        marginBottom: 5,
    },
    chatbot: {
        bottom: 50,
        right: 0,
        position: 'absolute',
        flex: 1,
        width: 40,
        height: 40,
        backgroundColor: 'green',
        borderRadius: 22,
    },
    iconChat: {
        textAlign: 'center',
        marginTop: 8,
    },
    iconSend: {
        marginLeft: 5,
        marginTop: 5,
    },

    item: {
        marginVertical: moderateScale(7, 2),
        flexDirection: 'row'
    },
    itemIn: {
        marginLeft: 20
    },
    itemOut: {
        alignSelf: 'flex-end',
        marginRight: 20
    },
    balloon: {
        maxWidth: moderateScale(250, 2),
        paddingHorizontal: moderateScale(10, 2),
        paddingTop: moderateScale(5, 2),
        paddingBottom: moderateScale(7, 2),
        borderRadius: 20,
    },
    arrowContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: -1,
        flex: 1
    },
    arrowLeftContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-start'
    },

    arrowRightContainer: {
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
    },

    arrowLeft: {
        left: moderateScale(-6, 0.5),
    },

    arrowRight: {
        right: moderateScale(-6, 0.5),
    }
})
