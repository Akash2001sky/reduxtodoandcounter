import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Button,
  FlatList,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useState} from 'react';
import Icon from 'react-native-vector-icons/dist/FontAwesome';
import {DrawerActions} from '@react-navigation/native';
import { todoAdd } from '../../redux/reducer/action/Action';

const Todo = ({navigation}: any) => {
  const [data, setData] = useState('');
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const todo = useSelector((state: any) => state.TodoReducer.todo);
  console.log(todo);

  const handleAdd = () => {

    dispatch(()=>todoAdd().payload.push({id:Date.now(),data}))
    console.log(todo)
    setData('')
    // if (data.trim()) {
    //   if (editingId) {
    //     dispatch({type: 'UPDATE', payload: {id: editingId, data}});
    //     setEditingId(null);
    //   } else {
    //     dispatch({type: 'ADD', payload: {id: Date.now(), data}});
    //   }
    //   setData('');
    // }
  };

  const handleDelete = (id: number) => {
    dispatch({type: 'DELETE', payload: id});
  };

  const handleEdit = (todo: any) => {
    setEditingId(todo.id);
    setData(todo.data);
  };

  const renderItem = ({item}: any) => {
    return (
      <View
        style={{
          marginVertical: 10,
          flexDirection: 'row',
          backgroundColor: '#454545',
          height: 40,
          justifyContent: 'space-between',
          alignItems: 'center',
          marginHorizontal: 20,
          borderRadius: 5,
        }}>
        <Text style={{color: '#ffffffaa', fontSize: 20, marginLeft: 10}}>
          {item.data}
        </Text>
        <TouchableOpacity
          onPress={() => handleEdit(item)}
          style={{
            backgroundColor: '#ffffff',
            height: 30,
            width: 40,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
          }}>
          <Text style={{color: '#000000'}}>EDIT</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => handleDelete(item.id)}
          style={{
            backgroundColor: '#ffffff',
            height: 30,
            width: 60,
            alignItems: 'center',
            justifyContent: 'center',
            borderRadius: 5,
            marginRight: 10,
          }}>
          <Text style={{color: '#000000'}}>DELETE</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return (
    <View style={styles.maincontainer}>
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
          justifyContent: 'space-between',
          margin: 20,
        }}>
        <TextInput
          placeholder="Add Todo"
          style={styles.input}
          onChangeText={txt => setData(txt)}
          value={data}
        />
        <TouchableOpacity style={styles.AddBtn} onPress={handleAdd}>
          {editingId ? (
            <Text style={{fontSize: 20, color: '#ffffff'}}>UPDATE</Text>
          ) : (
            <Text style={{fontSize: 20, color: '#ffffff'}}>ADD</Text>
          )}
        </TouchableOpacity>
      </View>
      <FlatList
        data={todo}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
    </View>
  );
};

export default Todo;

const styles = StyleSheet.create({
  maincontainer: {
    backgroundColor: '#ffffff',
    flex: 1,
  },
  input: {
    borderWidth: 1,
    borderColor: '#2C3333',
    fontSize: 20,
    width: 250,
    borderRadius: 10,
  },
  AddBtn: {
    backgroundColor: '#2C3333',
    height: 50,
    width: 100,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
