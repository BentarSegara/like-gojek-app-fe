import { NavigationContainer } from "@react-navigation/native";
import AuthProvider from "./src/context/AuthContext";
import NativeStack from "./src/navigator/NativeStack";


export default function App() {
  return (
    <AuthProvider>
      <NavigationContainer>
        <NativeStack/>
      </NavigationContainer>
    </AuthProvider>
  );}