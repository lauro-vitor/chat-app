import React from 'react';
import {View, StyleSheet} from 'react-native';
import PersonList from '../components/PersonList';
import {useSelector} from 'react-redux';
import {ScrollView} from 'react-native-gesture-handler';
import {withTheme} from 'react-native-paper';
export function Persons(props) {
  const owner = useSelector(state => state.owner);
  const lastUser = useSelector(stateElement => stateElement.lastUser);
  const ownerParam = owner.find(element => element.name === lastUser);
  if (ownerParam) {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View>
            <PersonList
              owner={ownerParam}
              navigation={props.navigation}
              user={lastUser}
            />
          </View>
        </ScrollView>
      </View>
    );
  } else {
    return null;
  }
}
export default withTheme(Persons);
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
