import {
  useCallback,
  useEffect,
  useRef,
  useState,
  type RefCallback,
} from "react";

export type NodeDimension = {
  width: number;
  height: number;
};

export type NodesDimensionsMap = Record<string, NodeDimension>;

export const useNodesDimensions = () => {
  const [nodesDimensions, setNodesDimensions] = useState<NodesDimensionsMap>(
    {},
  );
  const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);

  const nodeRef: RefCallback<Element> = useCallback((el) => {
    if (!resizeObserverRef.current) {
      resizeObserverRef.current = new ResizeObserver((entries) => {
        const nodesToUpdate = Object.fromEntries(
          entries
            .map((entry) => [
              (entry.target as HTMLElement).dataset.id,
              {
                width: entry.borderBoxSize[0].inlineSize,
                height: entry.borderBoxSize[0].blockSize,
              },
            ])
            .filter((entry) => !!entry[0]),
        );
        setNodesDimensions((prev) => ({
          ...prev,
          ...nodesToUpdate,
        }));
      });
    }
    const resizeObserver = resizeObserverRef.current;

    if (el) {
      resizeObserver.observe(el);
      return () => {
        setNodesDimensions((prev) => {
          const newNodesRect = { ...prev };
          delete newNodesRect[(el as HTMLElement).dataset.id ?? ""];
          return newNodesRect;
        });
        resizeObserver.unobserve(el);
      };
    }
  }, []);

  useEffect(
    () => () => {
      if (resizeObserverRef.current) {
        resizeObserverRef.current.disconnect();
      }
    },
    [],
  );

  return {
    nodeRef,
    nodesDimensions: nodesDimensions,
  };
};
