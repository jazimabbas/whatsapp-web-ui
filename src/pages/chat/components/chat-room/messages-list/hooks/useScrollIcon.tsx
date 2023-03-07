import { useEffect, useRef } from "react";

export default function useScrollIcon(callback: Function) {
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

  return containerRef;
}
