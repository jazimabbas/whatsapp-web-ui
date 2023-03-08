import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

/**
 * If no chat inbox selected, need to navigate to chat page,
 * maybe user reload the page
 */
export default function useNavigateToChat(activeInbox?: any) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!activeInbox) {
      navigate("/");
    }
  }, [activeInbox, navigate]);
}
