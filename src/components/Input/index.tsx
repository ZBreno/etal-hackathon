import React, { useState } from "react";
import {
	ErrorText,
	Label,
	Input as InputStyled,
	InputContainer,
	Container,
} from "./styles";
import { useTheme } from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { TextInputProps } from "react-native";

interface InputProps extends TextInputProps {
	label?: string;
	error?: boolean;
}

interface SearchInputProps extends TextInputProps {
	label?: string;
	error?: boolean;
	icon?: React.ReactNode;
}

export const Input = ({ label, error, ...props }: InputProps) => {
	return (
		<Container>
			{label && <Label errorMode={error}>{label}</Label>}
			<InputStyled errorMode={error} {...props} />
			{error && <ErrorText>{error}</ErrorText>}
		</Container>
	);
};
// export const PasswordInput = ({ label, style, error, ...props }) => {

//     const [isHidden, setIsHidden] = useState(true);

//     const hidePassword = () => {
//         setIsHidden(!isHidden)
//     }

//     return (
//         <View style={[styles.container, style]}>
//             {label && <Text style={[styles.label, error && styles.errorMode]}>{label}</Text>}
//             <View style={[styles.inputContainer, error && styles.errorMode]}>
//                 <TextInput
//                     secureTextEntry={isHidden}
//                     style={styles.inputContent}
//                     {...props}
//                 />
//                 <TouchableOpacity onPress={hidePassword}>
//                     {
//                         isHidden ?
//                             <EyeOff color={theme.colors.primary} width={18} height={18} /> :
//                             <Eye color={theme.colors.primary} width={18} height={18} />
//                     }
//                 </TouchableOpacity>
//             </View>
//             {error && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//     );
// }

// export const MaskedInput = ({ label, style, error, ...props }) => {
//     const currentStyle = !error ? styles.input : {
//         ...styles.input,
//         ...styles.errorMode
//     }
//     return (
//         <View style={[styles.container, style]}>
//             {label && <Text style={[styles.label, error && styles.errorMode]}>{label}</Text>}
//             <MaskedTextInput
//                 style={currentStyle}
//                 {...props}
//             />
//             {error && <Text style={styles.errorText}>{error}</Text>}
//         </View>
//     );
// }

export const IconInput = ({ label, style, icon, ...props }: SearchInputProps) => {
	return (
		<Container>
			{label && <Label>{label}</Label>}
			<InputContainer>
				<InputStyled {...props} />

				{icon}
			</InputContainer>
		</Container>
	);
};


// export const BarCodeInput = ({ label, style, onBarCodePress, ...props }) => {
// 	return (
// 		<View style={[styles.container, style]}>
// 			{label && <Text style={styles.label}>{label}</Text>}
// 			<View style={styles.inputContainer}>
// 				<TextInput style={styles.inputContent} {...props} />
// 				<TouchableOpacity onPress={onBarCodePress}>
// 					<Camera width={20} height={20} color={theme.colors.primary} />
// 				</TouchableOpacity>
// 			</View>
// 		</View>
// 	);
// };
