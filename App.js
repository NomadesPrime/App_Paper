import { Provider } from "react-native-paper";
import { View } from "react-native";
import MeuCartao from "./src/components/MeuCartao";
import MyComponent from "./src/components/OutroComponente";
export const App = () => (
  <Provider>
    <View style={{ padding: "20px" }}>
      <MeuCartao />
      <br></br>
      <MyComponent />
    </View>
  </Provider>
);

export default App;