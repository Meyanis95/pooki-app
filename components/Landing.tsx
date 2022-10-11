import { useWalletConnect } from "@walletconnect/react-native-dapp";
import Home from "./Home";
import { LoginScreen } from "./LoginScreen";

export default function Landing() {
  const connector = useWalletConnect();
  return <>{connector.connected ? <Home /> : <LoginScreen />}</>;
}
