import { Navigation } from 'react-native-navigation';
import { Provider } from 'react-redux';
import { registerScreens } from './src-app/modules/screens';
import configureStore from './src-app/core/store/configureStore';
import httpMiddleware from './src-app/core/middlewares/http.middleware';

const store = configureStore();

registerScreens(store, Provider);

const navigatorStyle = {
	topBarElevationShadowEnabled: false,
	navBarHideOnScroll: true,
	tabBarHidden: true,
	drawUnderTabBar: true
};

Navigation.startSingleScreenApp({
	screen: {
		screen: 'Teste',
		navigatorStyle,
		leftButtons: [
			{
				id: 'sideMenu'
			}
		]
	},
	drawer: {
		left: {
			screen: 'Drawer'
		},
		disableOpenGesture: true
	},
	animationType: 'none' // add transition animation to root change: 'none', 'slide-down', 'fade'
});
httpMiddleware()




