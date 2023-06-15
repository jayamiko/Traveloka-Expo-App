import { LogBox } from "react-native";

if (__DEV__) {
  const ignoreWarns = [
    "EventEmitter.removeListener",
    "Sending `onAnimatedValueUpdate` with no listeners registered",
    "[fuego-swr-keys-from-collection-path]",
    "Setting a timer for a long period of time",
    "ViewPropTypes will be removed from React Native",
    "AsyncStorage has been extracted from react-native",
    "exported from 'deprecated-react-native-prop-types'.",
    "Non-serializable values were found in the navigation state.",
    "VirtualizedLists should never be nested inside plain ScrollViews",
    "Task orphaned for request <NSMutableURLRequest:0x600003494770>{URL:http://127.0.0.1:19000/assets/src/assets/rooms/room-3.jpg?platform=ios&hash=3f3g1fa93a0c56169cfa53538605cd18?platform=ios&dev=true&hot=falsek&strict=false&minify=false}",
    "Task orphaned for request <NSMutableURLRequest:0x600003494770>{URL:http://127.0.0.1:19000/assets/src/assets/promo/ticket-8.jpg?platform=ios&hash=3f3g1fa93a0c56169cfa53538605cd18?platform=ios&dev=true&hot=falsek&strict=false&minify=false}",
  ];

  const warn = console.warn;
  console.warn = (...arg) => {
    for (const warning of ignoreWarns) {
      if (arg[0].startsWith(warning)) {
        return;
      }
    }
    warn(...arg);
  };

  LogBox.ignoreLogs(ignoreWarns);
}
