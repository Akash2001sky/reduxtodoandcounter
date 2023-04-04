import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {onDecrement, onIncrement, onReset} from '../redux/reducer/action/Action';
import {DrawerActions} from '@react-navigation/native';

import Icon from 'react-native-vector-icons/dist/FontAwesome';
interface obj {}
const Counter = ({navigation}: any) => {
  const counter = useSelector((state: any) => state.counterReducer.count);
  const dispatch = useDispatch();

  return (
    <View style={{flex: 1, backgroundColor: '#ffffff'}}>
      <View style={{paddingHorizontal: 20, paddingTop: 10}}>
        <TouchableOpacity
          onPress={() => navigation.dispatch(DrawerActions.toggleDrawer())}>
          <Icon name="toggle-on" size={30} color="#000000aa" />
        </TouchableOpacity>
        <Text>Drawer</Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          marginTop: '100%',
        }}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(onIncrement())}>
          <Text style={{color: '#ffffff', fontSize: 20}}>ADD</Text>
        </TouchableOpacity>
        <Text style={{alignSelf: 'center', fontSize: 20}}>{counter}</Text>

        <TouchableOpacity
          style={styles.button}
          onPress={() => dispatch(onDecrement())}>
          <Text style={{color: '#ffffff', fontSize: 20}}>Reduce</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={styles.reset}
        onPress={() => dispatch(onReset())}>
        <Text style={{color: '#ffffff', fontSize: 20}}>Reset</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Counter;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#0E8388',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  reset: {
    backgroundColor: '#0E8388',
    width: 80,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    marginTop: 10,
    marginLeft: 165,
  },
});
