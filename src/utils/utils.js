import { parseCSV } from "./parse/parseCsv";
import { displayCustomAlert } from "./ui/displayAlert";

export const handleFileUpload = async (file, fileInputRef, setCustomAlert, navigate) => {
    fileInputRef.current.value = '';
    if (file && file.name.endsWith('.csv')) {
        try {
            let info = await parseCSV(file);
            localStorage.setItem('csvData', JSON.stringify(info));
            navigate("/tableview");
        } catch (error) {
            displayCustomAlert('Ошибка c CSV файлом', setCustomAlert);
        }
    } else {
        displayCustomAlert('Неправильный формат файла, разрешены только файлы .CSV', setCustomAlert);
    }
};