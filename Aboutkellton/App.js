

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View,TouchableOpacity} from 'react-native';


export default class App extends Component {
  render() {
    return (
      <View style={{flex:1,top:20}}>
        <View style={{flex:1.3,backgroundColor:'white',marginLeft:3}}>
        <Text style={{fontSize:12,fontWeight:'bold'}}>Kellton Tech is a public listed,  CMMI Level 5,  and ISO 9001.2015  certified global company, providing acutting-edge digital transformation solutions and  services in strategy, consulting, digital, and technology. With our services  vision  "Infinite Possibilities with Technology"and specialized digital transformation skills across all business functions,We work at the intersection of bussiness and technology to deliver sustainable business value to our clients.</Text>
        </View>
     

        <View style={{flex:9.7,backgroundColor:'white',marginLeft:3}}>
        <Text style={{fontSize:13.4,fontWeight:'bold'}}>We  have  a  global  workforce  of  more  than 1500 employees  that  work  together  with  client-startups,   SMBs,   and Fortune 500   businesses-to  drive innovation and deliver on our promises to stakeholders.  To  know more about our organization,please visit us at www.kelltontech.com</Text>
        </View>
      </View>
    );
  }
}

