import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const ToastSuccess = (text) => {
    toast.success(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export const ToastDefault = (text) => {
    toast.success(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export const ToastError = (text) => {
    toast.error(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}

export const ToastInfo = (text) => {
    toast.info(text, {
        position: toast.POSITION.TOP_RIGHT
    });
}