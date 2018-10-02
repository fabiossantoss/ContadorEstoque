import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

const ResultBottom = () => {
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text>Qtde Produtos</Text>
        <Text>Qtde Total Items</Text>
      </View>
      <View style={styles.form}>
        <Text>Qtde Produtos</Text>
        <Text>Qtde Total Items</Text>
      </View>
    </View>
  );
};

export default ResultBottom;
