import { useCallback, useRef, useState, type RefCallback } from "react";


export function useCodeInputs() {
    const [elements, setElements] = useState<HTMLInputElement[]>([]);
    const resizeObserverRef = useRef<ResizeObserver | undefined>(undefined);
    const nodeRef: RefCallback<HTMLInputElement> = useCallback((el) => {
    if (!resizeObserverRef.current) {
        resizeObserverRef.current = new ResizeObserver((entries) => {
            setElements(entries.map(entry => entry.target as HTMLInputElement))
        })

    }
    const resizeObserver = resizeObserverRef.current;
    if (el) {
      resizeObserver.observe(el);
      return () => {
        resizeObserver.unobserve(el);
      };
    }
    }, [])
    return {
        nodeRef,
        elements
    }
}