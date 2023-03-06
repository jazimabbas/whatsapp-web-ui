import ChatPage from "pages/chat";
import SplashScreen from "pages/splash";
import useAppLoad from "pages/splash/hooks/useAppLoad";

export default function App() {
  const { isLoaded, progress } = useAppLoad();

  if (progress < 100 && !isLoaded) return <SplashScreen isLoaded={isLoaded} progress={progress} />;
  return <ChatPage />;
}
