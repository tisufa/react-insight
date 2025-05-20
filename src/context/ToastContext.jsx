import { createContext } from "react";

export const ToastContext = createContext({
    showInfo: (message) => {},
    showSuccess: (message) => {},
    showWarning: (message) => {},
    showError: (message) => {},
});