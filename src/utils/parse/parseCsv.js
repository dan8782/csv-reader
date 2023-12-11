import Papa from 'papaparse';

// тут используется библиотека для парсинга csv
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
