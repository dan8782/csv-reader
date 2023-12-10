// utils.js
import Papa from 'papaparse';
import CustomAlert from './Components/CustomAlert';

// библиотека для csv to json парсинга
function parseCSV(file) {
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

const displayCustomAlert = (message, setCustomAlert) => {
    setCustomAlert(<CustomAlert message={message} />);
    setTimeout(() => {
        setCustomAlert(null);
    }, 3000);
};

export function handleFileUpload(fileInputRef, setCustomAlert, navigate) {
    return async function (event) {
        const file = event.target.files?.[0];
        fileInputRef.current.value = '';

        if (file && file.name.endsWith('.csv')) {
            try {
                let info = await parseCSV(file);
                localStorage.setItem('csvData', JSON.stringify(info));
                console.log(info);
                navigate("/tableview");
            } catch (error) {
                console.error('Error parsing CSV:', error);
                displayCustomAlert('Error parsing CSV', setCustomAlert);
            }
        } else {
            displayCustomAlert('Неправильный формат файла, разрешены только файлы .CSV', setCustomAlert);
        }
    };
}

