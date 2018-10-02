import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  TextInput,
} from 'react-native';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Creators as MainActions } from 'store/ducks/main';

import styles from './styles';

import ProductItem from './components/productItem';

class Principal extends Component {

  state = {
    productCode: null,
  }

  componentDidMount() {
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <StatusBar barStyle="light-content" />
        <View style={styles.form}>
          <Text style={styles.title}>Contador de Estoque</Text>
          <TextInput
            style={styles.textInput}
            autoCapitalize="none"
            autoCorrect={false}
            underlineColorAndroid="transparent"
            placeholder="Insira o Código do Produto"
            placeholderTextColor="#FFF"
            keyboardType="numeric"
            value={this.state.productCode}
            onChangeText={productCode => this.setState({ productCode })}
          />
          <TouchableOpacity
            style={styles.btn}
            onPress={() => this.props.add(this.state.productCode)}
          >
            <Text style={styles.textIncluir}>Incluir</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.formItem}>
          <Text style={styles.titleProducts}>Produto</Text>
          <Text style={styles.titleProducts}>Quantidade</Text>
          <Text style={styles.titleProducts}>EDIT</Text>
        </View>
        <FlatList
          data={this.props.data.listItem}
          keyExtractor={item => String(item.id)}
          renderItem={({ item }) => <ProductItem item={item} />}
        />
      </SafeAreaView>
    );
  }
}

const mapStateToProps = state => ({
  data: state.main,
});

const mapDispatchToProps = dispatch => bindActionCreators(MainActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Principal);
