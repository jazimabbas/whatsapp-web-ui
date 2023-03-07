import { useEffect, useRef } from "react";

export default function useScrollToBottom(callback: Function, shouldScrollToBottom?: boolean) {
  const containerRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const { scrollTop, scrollHeight, clientHeight } = containerRef.current as any;

      const isScrolledBottom = scrollHeight - scrollTop === clientHeight;

      if (!isScrolledBottom) {
        callback(true);
      } else {
        callback(false);
      }
    };

    const ref = containerRef.current as any;
    ref.addEventListener("scroll", handleScroll);

    return () => ref.removeEventListener("scroll", handleScroll);
  }, [containerRef, callback]);

  useEffect(() => {
    if (shouldScrollToBottom && containerRef && containerRef.current) {
      const ref = containerRef.current as any;
      ref.scrollTop = ref.scrollHeight;
    }
  }, [shouldScrollToBottom, containerRef]);

  return containerRef;
}
