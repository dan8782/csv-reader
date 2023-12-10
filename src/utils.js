// utils.js
import Papa from 'papaparse';
import CustomAlert from './Components/CustomAlert';

// библиотека для csv to json парсинга
export function parseCSV(file) {
    return new Promise((resolve, reject) => {
        Papa.parse(file, {
            complete: function (results) {
                resolve(results.data);
            },
            error: function (error) {
                reject(error);
            },
            encoding: "Windows-1251", // кодировка для русских символов
        });
    });
}

export const displayCustomAlert = (message, setCustomAlert) => {
    setCustomAlert(<CustomAlert message={message} />);
    setTimeout(() => {
        setCustomAlert(null);
    }, 3000);
};
