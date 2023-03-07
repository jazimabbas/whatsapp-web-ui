import { useEffect, useRef } from "react";

export default function useScrollToBottom(
  callback: Function,
  shouldScrollToBottom?: boolean,
  chatId?: string
) {
  const containerRef = useRef(null);
  const lastMessageRef = useRef(null);

  useEffect(() => {
    console.log("lastMessageRef: ", lastMessageRef.current);
    if (lastMessageRef && lastMessageRef.current) {
      (lastMessageRef.current as any).scrollIntoView({ behavior: "auto" });
    }
  }, [lastMessageRef, chatId, containerRef]);

  // useEffect(() => {
  //   _scrollToBottom(true);
  //   console.log("first useEffect");
  // }, [chatId]);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const { scrollTop, scrollHeight, clientHeight } = containerRef.current as any;

  //     const isScrolledBottom = scrollHeight - scrollTop === clientHeight;

  //     if (!isScrolledBottom) {
  //       callback(true);
  //     } else {
  //       callback(false);
  //     }
  //   };

  //   const ref = containerRef.current as any;
  //   ref.addEventListener("scroll", handleScroll);

  //   return () => ref.removeEventListener("scroll", handleScroll);
  // }, [containerRef, callback]);

  // useEffect(() => {
  //   // if (shouldScrollToBottom && containerRef && containerRef.current) {
  //   //   console.log("should scroll to bottom");
  //   //   const ref = containerRef.current as any;
  //   //   console.log("scrollHeight: ", ref.scrollHeight);
  //   //   console.log("scrollTop: ", ref.scrollTop);
  //   //   ref.scrollTop = ref.scrollHeight;
  //   // }
  //   _scrollToBottom();
  // }, [shouldScrollToBottom, containerRef, chatId]);

  // const _scrollToBottom = (isImmediate?: boolean) => {
  //   const ref = containerRef.current as any;

  //   console.log("before scrollHeight: ", ref.scrollHeight);
  //   console.log("before scrollTop: ", ref.scrollTop);

  //   if (!ref) return;

  //   if (isImmediate || shouldScrollToBottom) {
  //     ref.scrollTop = ref.scrollHeight;
  //     console.log("should set new scrollTop");
  //   }

  //   console.log("scrollHeight: ", ref.scrollHeight);
  //   console.log("scrollTop: ", ref.scrollTop);
  // };

  return { containerRef, lastMessageRef };
}
