"use client";

import { useWidth } from "@/storefront/hooks/use-width";
import * as React from "react";

export declare interface MarqueeProps {
  speed?: number;
  direction?: "left" | "right";
  pauseOnHover?: boolean;
  children: React.ReactNode;
  className?: string;
}

export function Marquee({
  speed = 0.5,
  direction = "left",
  pauseOnHover,
  children,
  ...rest
}: MarqueeProps): JSX.Element {
  const [reps, setReps] = React.useState(1);

  const [container, containerWidth] = useWidth();
  const [item, itemWidth] = useWidth();

  React.useEffect(() => {
    if (containerWidth && itemWidth) {
      setReps(Math.ceil(containerWidth / itemWidth));
    }
  }, [containerWidth, itemWidth]);

  return (
    <div
      ref={container}
      data-marquee=""
      data-direction={direction}
      data-pause-on-hover={pauseOnHover ? "" : null}
      {...rest}
    >
      <div data-marquee-inner="">
        {new Array(2).fill(0).map((_, clone) => {
          return (
            <div
              key={clone}
              data-marquee-content=""
              style={{
                animationDuration: `${
                  ((itemWidth ?? 0) * reps) / (100 * speed)
                }s`,
              }}
            >
              {new Array(reps).fill(0).map((_, rep) => {
                const isFirstItem = clone === 0 && rep === 0;
                return (
                  <div
                    key={rep}
                    ref={isFirstItem ? item : null}
                    aria-hidden={!isFirstItem || false}
                    data-marquee-item=""
                  >
                    {children}
                  </div>
                );
              })}
            </div>
          );
        })}
      </div>
    </div>
  );
}
