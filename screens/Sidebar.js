import React from "react";
import { StyleSheet, Platform, Dimensions } from "react-native";
import { Content,	Text, List,	ListItem,	Icon,	Container,	Left,	Right,	Badge,	Button,	View,	StyleProvider,	getTheme,	variables } from "native-base";

const deviceHeight = Dimensions.get("window").height;
const deviceWidth = Dimensions.get("window").width;
const datas = [
	{
		name: "Subir producto",
		route: "Anatomy",
		bg: "#C5F442",
	},
	{
		name: "Mensajes",
		route: "Actionsheet",
		bg: "#C5F442",
	},
	{
		name: "rockplay",
		route: "Header",
		bg: "#477EEA",
	},
	{
		name: "Magazine",
		route: "Footer",
		bg: "#DA4437",
		types: "3",
	},
	{
		name: "Colecciones",
		route: "NHBadge",
		bg: "#4DCAE0",
	},
	{
		name: "Invita a tus amigos",
		route: "NHButton",
		bg: "#1EBC7C",
	},
	{
		name: "Ayuda",
		route: "NHCard",
		bg: "#B89EF5",

	},
];

export default class SideBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			shadowOffsetWidth: 1,
			shadowRadius: 4,			
		};
	}

	render() {
		return (
			<Container>
				<Content bounces={false} style={{ flex: 1, backgroundColor: "#fff", top: -1 }}>
					<List
						dataArray={datas}
						renderRow={data =>
							<ListItem button noBorder onPress={() => this.props.navigation.navigate(data.route)}>
								<Left>
									<Text style={styles.text}>
										{data.name}
									</Text>
								</Left>
								{data.types &&
									<Right style={{ flex: 1 }}>
										<Badge>
											<Text style={styles.badgeText}>{`${data.types}`}</Text>
										</Badge>
									</Right>}
							</ListItem>}
					/>
				</Content>
			</Container>
		);
	}
}

const styles = StyleSheet.create({
    sidebar: {
        flex: 1,
        backgroundColor: "#fff"
      },
      drawerCover: {
        alignSelf: "stretch",
        // resizeMode: 'cover',
        height: deviceHeight / 3.5,
        width: null,
        position: "relative",
        marginBottom: 10
      },
      drawerImage: {
        position: "absolute",
        // left: (Platform.OS === 'android') ? 30 : 40,
        left: Platform.OS === "android" ? deviceWidth / 10 : deviceWidth / 9,
        // top: (Platform.OS === 'android') ? 45 : 55,
        top: Platform.OS === "android" ? deviceHeight / 13 : deviceHeight / 12,
        width: 210,
        height: 75,
        resizeMode: "cover"
      },
      listItemContainer: {
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"
      },
      iconContainer: {
        width: 37,
        height: 37,
        borderRadius: 18,
        marginRight: 12,
        paddingTop: Platform.OS === "android" ? 7 : 5
      },
      sidebarIcon: {
        fontSize: 21,
        color: "#fff",
        lineHeight: Platform.OS === "android" ? 21 : 25,
        backgroundColor: "transparent",
        alignSelf: "center"
      },
      text: {
        fontWeight: Platform.OS === "ios" ? "500" : "400",
        fontSize: 16,
        marginLeft: 20
      },
      badgeText: {
        fontSize: Platform.OS === "ios" ? 13 : 11,
        fontWeight: "400",
        textAlign: "center",
        marginTop: Platform.OS === "android" ? -3 : undefined
      }
});
