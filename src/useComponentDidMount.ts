import { useRef, useEffect } from "react";

type Callback = () => any;
type AsyncCallback = () => Promise<any>;

const useComponentDidMount = (callback: Callback) => {
  const ref = useRef(callback);
  useEffect(ref.current, []);
};

const useComponentDidUnmount = (callback: Callback) => {
  const ref = useRef(callback);
  useEffect(() => ref.current, []);
};

export { useComponentDidMount, useComponentDidUnmount };
