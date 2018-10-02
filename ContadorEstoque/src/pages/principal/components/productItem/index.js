import React from 'react';

import {
  View,
  Text,
  TouchableOpacity,
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MainActions } from 'store/ducks/main';


import styles from './styles';


const ProductItem = ({ item, addQtde, deleteQtde }) => {
  return (
    <View style={styles.form}>
      <Text style={styles.text}>{item.product}</Text>
      <Text style={styles.text}>{item.qtde}</Text>
      <View style={styles.buttons}>
        <TouchableOpacity
          onPress={() => addQtde(item)}>
          <Icon name="add" size={24} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteQtde(item)}>
          <Icon name="delete" size={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const mapDispatchToProps = dispatch => bindActionCreators(MainActions, dispatch);

export default connect(null, mapDispatchToProps)(ProductItem);
