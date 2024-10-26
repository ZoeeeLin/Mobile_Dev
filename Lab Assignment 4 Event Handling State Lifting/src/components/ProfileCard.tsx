import React from "react";
import {
    View,
    Text,
    StyleSheet,
    Image,
} from "react-native";

function ProfileCard(): React.JSX.Element{
    return(
        <View style={style.profileCardView}>
            {/* <View> */}
                <Image style={style.bannerImg}
                source={require('../../assets/banner.jpg')} />
            {/* </View>
            <View> */}
                <Image style={style.profilePhoto}
                source={require('../../assets/profilePhoto.jpeg')} />
            {/* </View> */}
            {/* <View> */}
                <Text style={style.name}>Johnny Bravo</Text>
                <Text style={style.subtitle}>Whoa, mama!</Text>
                <Text style={style.introTxt}>Hey there, pretty mama! The name's Johnny Bravo.!!</Text>
            {/* </View> */}
            <View style={style.iconContainer}>
                <Image style={style.socialIcon}
                source={require('../../assets/fb.png')} />
                <Image style={style.socialIcon}
                source={require('../../assets/insta.png')} />
                <Image style={style.socialIcon}
                source={require('../../assets/linkedin.png')} />
                <Image style={style.socialIcon}
                source={require('../../assets/twitter.png')} />
            </View>
                
        </View>
    );
}

const style = StyleSheet.create({
    profileCardView: {
        height: 500,
        width: '80%',
        elevation: 20,
        borderRadius: 20,
        backgroundColor: '#F5F5DC',
    },

    bannerImg: {
        height: 180,
        width: 'auto',
        resizeMode: 'cover',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },

    profilePhoto: {
        height: 140,
        width: 140,
        borderRadius: 70,
        position: 'absolute',
        top: 110,
        borderWidth: 7,
        borderColor: '#FFFFFF',
        resizeMode: 'cover',
        left: '30%',
    },

    name: {
        marginTop: 50,
        fontSize: 30,
        fontWeight: '600',
        fontFamily: 'Pacifico',
        color: '#4B0082',
        textAlign: 'center',
        paddingTop: 20
    },

    subtitle: {
        fontSize: 25,
        fontWeight: '400',
        fontFamily: 'Pacifico',
        textAlign: 'center',
    },

    introTxt: {
        fontSize: 22,
        fontWeight: '400',
        fontFamily: 'sans-serif',
        textAlign: 'center',
    },

    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginTop: 'auto',
        marginBottom: 20,
    },

    socialIcon: {
        height: 30,
        width: 30,
        borderRadius: 30/2,
        resizeMode: 'cover',
        marginHorizontal: 15,
    }
})

export default ProfileCard;