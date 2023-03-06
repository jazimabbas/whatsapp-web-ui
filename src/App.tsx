import ChatPage from "pages/chat";
import SplashScreen from "pages/splash";
import useAppLoad from "pages/splash/hooks/useAppLoad";

export default function App() {
  const { isLoaded, progress } = useAppLoad();

  if (!isLoaded) return <SplashScreen progress={progress} />;
  return <ChatPage />;
}
