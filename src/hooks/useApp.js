import { useState } from "react";

/**
 * @template T
 * @param {T} model
 * @returns
 */
export const useApp = (model = null) => {
  /**@type {[{ isLoading: boolean, isProcessing: boolean, model: T }, function]} */
  const [state, setState] = useState({
    model: model,
    isLoading: true,
    isProcessing: false,
  });

  /** @type {(model: Partial<T>) => void} */
  const setModel = (model) => {
    setState((prev) => ({
      ...prev,
      model,
    }));
  };

  const setStateLoading = () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
  };

  const setStateProcessing = () => {
    setState((prev) => ({
      ...prev,
      isProcessing: true,
    }));
  };

  const setStateReady = () => {
    setState((prev) => ({
      ...prev,
      isLoading: false,
      isProcessing: false,
    }));
  };

  return {
    ...state,
    setStateReady,
    setStateLoading,
    setStateProcessing,
    setModel,
  };
};
