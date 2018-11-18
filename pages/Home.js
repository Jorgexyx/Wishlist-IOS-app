import React, { Component } from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { EvilIcons, MaterialCommunityIcons, SimpleLineIcons  } from '@expo/vector-icons';

class HomeScreen extends Component {
	static navigationOptions = { header: null }
	render() {
		return (
			<View style={{flex: 1, marginTop: 33}} >

				{/* HEADER VIEW */}
				<View style={Styles.navHeader}>	
					<MaterialCommunityIcons name="account-group" size={25} color='#000000' />
					<EvilIcons name="search" size={28} color='#4B0082' />
					<SimpleLineIcons name="present" size={25} color='#000000' />
				</View>

				{/* Search VIEW */}
				<View style={Styles.search}>
					<View style={{flex: 2}}>
						<Text style={Styles.text}> Gift Search </Text>
						<SearchBar
							lightTheme round
  						onChangeText={""}
  						onClear={""}
  						placeholder='Search for an item ...' />
					</View>
				</View>
			
			<View style={{flex: 7}}>
				<Text style={Styles.text}> HOLIDAY DEALS </Text>
				<View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', flexWrap: 'wrap'}}>
					<Image  source ={require('../Images/Appliances.jpg')} style={{width : 150, height: 150 }}/>
					<Image  source ={require('../Images/Smart.jpg')} style={{width : 150, height: 150 }}/>
					<Image  source ={require('../Images/Toys.jpg')} style={{width : 150, height: 150 }}/>
					<Image  source ={require('../Images/Recs.jpg')} style={{width : 150, height: 150 }}/>
				</View>
				
			</View>


			</View>
		);
	}
}

const Styles = StyleSheet.create({
	navHeader: {
		flex: 1,
		flexDirection: 'row',
		justifyContent: 'space-around',
	},
	search: {
		flex: 2,
	},
	text: {
		fontFamily: 'Avenir-Light',
		color: '#A9A9A9',
	},
});


export default HomeScreen;
