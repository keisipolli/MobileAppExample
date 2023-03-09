import React, {useCallback, useContext, userContext} from "react";
import {
	Text,
	View,
	Image,
	Pressable
} from "react-native";
import Button from "../../../components/Button";
import { UserContext } from "../../../../App";
import { styles } from "./styles";
import Signup from "../SignUp";
import Signin from "../SignIn";

const Splash = ({navigation}) => {
	const user = useContext(UserContext)
		console.log ('user => ', user)

const onSignup = () => {
        navigation.navigate('Signup')
    }

const onSignin = () => {
        navigation.navigate('Signin')
    }

	return (
		<View style={styles.container}>
			<Image resizeMode="contain" style={styles.image} source={require('../../../assets/splash_image.png')}/>
				<View style={styles.titleContainer}>
					<Text style={styles.title}>You'll Find</Text>
					<Text style={[styles.title, styles.innerTitle]}>All you need </Text>
					<Text style={styles.title}>Here!</Text>
				</View>
				
			<Button onPress={onSignup} title="Sign Up"/>

			<Pressable onPress={onSignin} hitSlop={20}>
                <Text style={styles.footerText}>Sign In</Text>
            </Pressable>

		</View>
	)
}
export default React.memo(Splash)