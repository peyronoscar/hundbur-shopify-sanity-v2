"use client"

import React from "react";

export function useWidth() {
   const [width, setWidth] = React.useState(0);
   const [node, setNode] = React.useState<HTMLElement | null>(null);
   const observer = React.useRef<ResizeObserver | null>(null);

   const disconnect = React.useCallback(
      () => observer.current?.disconnect(),
      [],
   );

   const observe = React.useCallback(() => {
      observer.current = new ResizeObserver(([entry]) =>
         setWidth(entry.contentRect.width),
      );
      if (node) observer.current.observe(node);
   }, [node]);

   React.useEffect(() => {
      observe();
      return () => disconnect();
   }, [disconnect, observe]);

   return [setNode, width] as const;
}