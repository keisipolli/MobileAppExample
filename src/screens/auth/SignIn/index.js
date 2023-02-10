import React, {useState} from "react";
import { View, Text } from "react-native";
import AuthHeader from "../../../components/AuthHeader";
import Input from "../../../components/Input";
import Checkbox from "../../../components/Checkbox";
import Button from "../../../components/Button";
import { styles } from "./styles"; 
import Separator from "../../../components/Separator";
import GoogleLogin from "../../../components/GoogleLogin";

const Signup = () => {
	const [checked, setChecked] = useState(false)
	return (
<View style={styles.container}>	
			<AuthHeader title="Sign In"/>
			<Input label="Email" placeholder="example@gmail.com"/>
			<Input isPassword label="Password" placeholder="******"/>
			<Button style={styles.button} title="Sign In" />
			<Separator text="Or sign up with" />
			<GoogleLogin />
			<Text style={styles.footerText}>Don't have an account?
			 <Text style={styles.footerLink}> Sign Up</Text>
			</Text>
		</View>
	)
}
export default React.memo(Signup)