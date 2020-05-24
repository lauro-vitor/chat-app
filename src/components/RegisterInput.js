import React, {useState} from 'react';
import {View, StyleSheet} from 'react-native';
import {TextInput, Button} from 'react-native-paper';
export default function(props) {
  const [getVisible, setVisible] = useState(true);
  return (
    <View style={styles.container}>
      <View style={styles.textInputContainer}>
        <TextInput
          label={props.label}
          value={props.value}
          onChangeText={props.onChangeText}
          secureTextEntry={props.type === 'password' ? getVisible : null}
          style={styles.textInput}
          autoCapitalize="none"
          keyboardType={props.keyboardType}
        />
      </View>
      <View style={styles.buttonIconEyeContainer}>
        <Button
          icon="eye"
          onPress={() => onPressIcon(getVisible, setVisible)} //onPressIcon(getVisible, setVisible)
          style={[props.type === 'password' ? null : styles.display]}
        />
      </View>
    </View>
  );
}
//keyboardType="email-address"
//autoCapitalize="none"
function onPressIcon(getVisible, setVisible) {
  if (getVisible) {
    setVisible(false);
  } else {
    setVisible(true);
  }
}
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  textInputContainer: {
    flex: 10,
  },
  buttonIconEyeContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  textInput: {
    backgroundColor: '#fff',
  },
  display: {
    display: 'none',
  },
});
