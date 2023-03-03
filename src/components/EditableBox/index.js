import React from "react";
import { Text, View , TextInput } from "react-native";
import { styles } from "./styles"; 

const Editablebox = ({label, value, onChangeText, editable}) => {
	return (

	<View style={styles.content}>
		<Text style={styles.label}>{label}</Text>
		<TextInput editable={editable} value={value} onChangeText={onChangeText} style={styles.input} />
	</View>
	)
}
export default React.memo(Editablebox)