import React, { Component } from 'react';
import { StyleSheet, Text, TouchableHighlight, View, Image, ImageBackground } from 'react-native';
import { SearchBar } from 'react-native-elements';
import { EvilIcons, MaterialCommunityIcons, SimpleLineIcons  } from '@expo/vector-icons';

class MakeupScreen extends Component {
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
  						placeholder='Search for an item ...' />
					</View>
				</View>
			
			<View style={{flex: 7}}>
				<Text style={Styles.text}> MAKEUP DEALS </Text>
				<View style={{flex: 2, flexDirection: 'row', justifyContent: 'space-around', alignContent: 'space-around', flexWrap: 'wrap'}}>
					<TouchableHighlight >
					<ImageBackground  source ={require('../Images/makeup.jpg')} style={{width : 150, height: 150 }}>
						<View style={Styles.textOverlay}>
							<View style={Styles.overlay} />
								<View style={{flex: 1, justifyContent: 'space-between', flexDirection: 'row', alignContent: 'center'}} >
									<Text style={[Styles.text, {color:'#ffffff'}]}> MAKEUP </Text>	
									<SimpleLineIcons name="arrow-right" size={18} color='#ffffff' />
								</View>
						</View>
					</ImageBackground>
					</TouchableHighlight>

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
	textOverlay: {
		position: 'absolute',
		top: 110,
		left: 0,
		right: 0,
		bottom: 0,
		justifyContent: 'center'
	},
	overlay: {
		flex:1,
		position: 'absolute',
		top: 0,
		left: 0,
		right: 0,
		bottom: 0,
		opacity: 0.4,
		height: 40,
		backgroundColor: '#000000',
	},
	image: {
	 width: 150,
	 height: 150
	},
});


export default MakeupScreen;
