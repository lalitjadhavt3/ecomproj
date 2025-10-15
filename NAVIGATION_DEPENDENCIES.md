# Required Navigation Dependencies

To use the navigation system, you need to install these packages:

## Core Navigation
```bash
npm install @react-navigation/native @react-navigation/stack @react-navigation/bottom-tabs
```

## React Native Dependencies
```bash
npm install react-native-screens react-native-safe-area-context react-native-gesture-handler
```

## AsyncStorage
```bash
npm install @react-native-async-storage/async-storage
```

## iOS Setup (if using iOS)
```bash
cd ios && pod install
```

## Android Setup
Make sure to follow the React Navigation setup guide for Android gesture handler configuration.

## Additional Setup
1. Import gesture handler at the top of your index.js:
```javascript
import 'react-native-gesture-handler';
```

2. Wrap your App component with gesture handler (if needed):
```javascript
import {gestureHandlerRootHOC} from 'react-native-gesture-handler';
export default gestureHandlerRootHOC(App);
```