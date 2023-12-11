import CustomAlert from './CustomAlert.js';

export const displayCustomAlert = (message, setCustomAlert) => {
    setCustomAlert(<CustomAlert message={message} />);
    setTimeout(() => {
        setCustomAlert(null);
    }, 3000);
};
