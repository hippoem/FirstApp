import React, {Component} from 'react';
import {Header, Body, Title, Container, Content, Text} from 'native-base';

export default class QuestionDetail extends Component {
  renderHeader() {
    const {title} = this.props;
    return(
      <Header><Body><Title>{title}</Title></Body></Header>
    );
  }

  render(){
    return(
      <Container>
        {this.renderHeader()}
        <Content>
          <Text>Question Detail Page</Text>
        </Content>
      </Container>
    );
  }

}
