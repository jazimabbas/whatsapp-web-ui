import { useEffect, useRef } from "react";

export default function useScrollToBottom(
  callback: Function,
  shouldScrollToBottom?: boolean,
  chatId?: string
) {
  const containerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    if (lastMessageRef && lastMessageRef.current) {
      const ref = lastMessageRef.current as any;

      if (shouldScrollToBottom) ref.scrollIntoView({ behavior: "smooth" });
      else ref.scrollIntoView({ behavior: "auto" });
    }
  }, [lastMessageRef, chatId, shouldScrollToBottom]);

  useEffect(() => {
    const ref = containerRef.current as any;
    ref.addEventListener("scroll", _toggleScrollBottomIcon);

    return () => ref.removeEventListener("scroll", _toggleScrollBottomIcon);
    // eslint-disable-next-line
  }, [containerRef, callback]);

  const _toggleScrollBottomIcon = () => {
    const { scrollTop, scrollHeight, clientHeight } = containerRef.current as any;
    const isScrolledBottom = scrollHeight - scrollTop - 150 > clientHeight;

    if (isScrolledBottom) callback(true);
    else callback(false);
  };

  return { containerRef, lastMessageRef };
}
