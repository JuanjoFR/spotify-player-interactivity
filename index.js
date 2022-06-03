import { AppRegistry } from "react-native";
import { name as appName } from "./app.json";
import Application from "./libraries/application";

AppRegistry.registerComponent(appName, () => Application);
