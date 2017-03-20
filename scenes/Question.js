import React, {Component} from 'react';
import {StyleSheet, Text, View, ListView} from 'react-native';

export default class Question extends Component {

  contructor(){
    super();
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.questions= [
      {title: "First Quesion", author: "Feri"},
      {title: "Second Quesion", author: "Donald"},
      {title: "Third Quesion", author: "Adthasit"}
    ];

    this.state = {
      dataSource : ds.cloneWithRows(this.questions)
    };

  }

  renderRow(rowData){

    return(
      <Text>{rowData.title} - {rowData.author}</Text>
    );
  }

  render() {
    return (
      <View style={styles.container}>
        <ListView
          dataSource={this.state.dataSource}
          renderRow={this.renderRow.bind(this)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  }
});
