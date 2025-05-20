import { toast, ToastContainer } from "react-toastify";
import { ToastContext } from "../context/ToastContext";

export const ToastProvider = ({ children }) => {
    const showInfo = (message,) => toast.info(message, { autoClose: 2000});
    const showSuccess = (message) => toast.success(message, { autoClose: 2000});
    const showWarning = (message) => toast.warn(message, { autoClose: 2000});
    const showError = (message) => toast.error(message, { autoClose: 2000});
    
    return <ToastContext.Provider value={{ showError, showInfo, showSuccess, showWarning}}>
        {children}
        <ToastContainer />
    </ToastContext.Provider>
}